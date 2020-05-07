const express = require('express');

const accountController = require('../controllers/account.controller');

const accountRouter = express.Router();

accountRouter.post('/login', accountController.loginUser);

module.exports = accountRouter;