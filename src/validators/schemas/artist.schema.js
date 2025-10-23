const Joi = require('joi');

const createArtistSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    contact: Joi.string().regex(/[0-9]{11}$/),
})


module.exports = {
    createArtistSchema
}