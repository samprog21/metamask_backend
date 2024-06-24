const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');
const { verifyJwtToken } = require('../config/verifyToken');

const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user) => {
  if (err || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  req.user = user;

  if (requiredRights.length) {
    const userRights = roleRights.get(user.role);
    const hasRequiredRights = requiredRights.every(right => userRights.includes(right));
    if (!hasRequiredRights && req.params.userId !== user.id) {
      return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
    }
  }

  resolve();
};

const auth = (...requiredRights) => async (req, res, next) => {
  try {
   
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Authentication token missing');

    const user = await verifyJwtToken(token);

    await new Promise((resolve, reject) => {
      verifyCallback(req, resolve, reject, requiredRights)(null, user);
    });

    next();
  } catch (error) {
    console.log("err",error)
    next(new ApiError(httpStatus.UNAUTHORIZED, 'Authentication failed'));
  }
};

module.exports = auth;
