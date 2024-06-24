const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), jsonParser,validate(userValidation.createUser), userController.createUser)
  .get(auth('getUsers'),jsonParser, validate(userValidation.getUsers), userController.getUsers);

router
  .route('/:userId')
  .get(auth('getUsers'),jsonParser, validate(userValidation.getUser), userController.getUser)
  .patch(auth('manageUsers'),jsonParser, validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('manageUsers'),jsonParser, validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
