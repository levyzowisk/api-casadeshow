const express =  require('express');
const router = express.Router();

const authController = require('../../controllers/auth/auth.controller');
const {checkBody} = require('../../middleware/checkBody')
const {validateLogin} = require('../../validators/login.validator');
router.post('/login', checkBody, validateLogin ,authController.login);

module.exports = {
    router
}