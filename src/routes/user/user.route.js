const express = require('express');

const router = express.Router();

const userController = require('../../controllers/user/user.controller');
const { checkBody } = require('../../middleware/checkBody');
const { validateCreateUser } = require('../../validators/user.validator');

router.post('/', checkBody, validateCreateUser, userController.create);

module.exports = {
    router
}