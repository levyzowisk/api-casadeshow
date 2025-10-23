const {BaseError} = require('../utils/BaseError');
const {createArtistSchema} = require('./schemas/artist.schema');

function validateCreateArtist(req, res, next) {
    const {error} = createArtistSchema.validate(req.body);

    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

module.exports = {
    validateCreateArtist
}
