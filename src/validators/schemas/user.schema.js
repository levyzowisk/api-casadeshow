const Joi = require('joi');

const createUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    telephone: Joi.string().required(),
    type_user: Joi.string().valid("ADMIN", "CLIENT").required(),
})

module.exports = {
    createUserSchema
}