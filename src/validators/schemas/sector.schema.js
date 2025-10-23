const Joi = require('joi');

const updateSectorSchema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    price: Joi.number().optional(),
    capacity: Joi.number().optional(),
    service_charge: Joi.number().optional()
}).required()

module.exports = {
    updateSectorSchema
}