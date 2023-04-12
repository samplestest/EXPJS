const express = require("express");
const routes = express.Router();
const { userController } = require("../Controller");

routes.post('/user', userController.createUser);
routes.get('/user', userController.getData);
routes.post('/user/update', userController.updateData);

module.exports = routes;