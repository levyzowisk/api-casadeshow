const express =  require('express');
const router = express.Router();

const authController = require('../../controllers/auth/auth.controller');
const {checkBody} = require('../../middleware/checkBody')
const {validateLogin: schemaLogin} = require('../../validators/login.validator');
const { validateToken } = require('../../middleware/verifyToken');
const { validateChangePassword: schemaChangePassword } = require('../../validators/changePassword.validator');

router.post('/login', checkBody, schemaLogin ,authController.login);
router.patch('/change-password', validateToken, checkBody ,schemaChangePassword, authController.changePassword);

module.exports = {
    router
}