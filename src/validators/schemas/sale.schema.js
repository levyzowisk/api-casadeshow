const Joi = require('joi');

const createSaleSchema = Joi.object({
    user_id: Joi.string().required(),
    event_id: Joi.string().required(),
    items: Joi.array().items(
        Joi.object({
            sector_id: Joi.string().required(),
            quantity: Joi.number().required(),
        }),
    ).required(),
    coupon_id: Joi.string().optional(),
    payment_method: Joi.string().valid("CARD", "PIX").required()
});

module.exports = {
    createSaleSchema
}