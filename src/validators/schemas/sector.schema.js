const Joi = require('joi');

const createEventSchema = Joi.object({
    name: Joi.string().required(),
    date_start: Joi.date().required(),
    capacity: Joi.number().required(),
    description: Joi.string().optional(),
    status: Joi.string().valid("CANCELED","EXHAUSTED").required(),
    is_visible: Joi.boolean().required()
})

module.exports = {
    createEventSchema
}