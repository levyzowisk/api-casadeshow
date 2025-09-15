const Joi = require('joi');

const changePasswordSchema = Joi.object({
    email: Joi.string().email().required(),
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required()
});

module.exports = {
    changePasswordSchema
}

