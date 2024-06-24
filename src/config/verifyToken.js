const jwt = require('jsonwebtoken');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const { User } = require('../models');

// JWT configuration
const secretKey = config.jwt.secret;

// Function to verify JWT token and retrieve user from database
const verifyJwtToken = async (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    if (decoded.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(decoded.sub);
   
    return user;
  } catch (error) {
    throw error; // Handle invalid tokens or other errors
  }
};

module.exports = {
  verifyJwtToken,
};
