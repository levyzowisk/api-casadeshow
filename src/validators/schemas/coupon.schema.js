const Joi = require('joi');

const createCouponSchema = Joi.object({
    code: Joi.string().required(),
    type: Joi.string().valid('FIXED', 'PERCENTAGE').required(),
    price: Joi.number().required(),
    expiration_date: Joi.date().required(),
    usage_limit: Joi.number().required(),
})

module.exports = {
    createCouponSchema
}