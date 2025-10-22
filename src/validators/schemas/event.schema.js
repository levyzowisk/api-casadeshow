const Joi = require('joi');

const createEventSchema = Joi.object({
    name: Joi.string().required(),
    date_start: Joi.date().required(),
    date_end: Joi.date().required(),
    capacity: Joi.number().required(),
    description: Joi.string().optional(),
    status: Joi.string().valid("CANCELED","EXHAUSTED", "PUBLISHED", "FINISHED", "DRAFT").required(),
    is_visible: Joi.boolean().required(),
    sectors: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            description: Joi.string().optional(),
            price: Joi.number().required(),
            capacity: Joi.number().required(),
            service_charge: Joi.number().required(),
        }),
    ).required(),
    artistIds: Joi.array()
})

module.exports = {
    createEventSchema
}