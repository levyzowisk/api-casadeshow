const { createEventSchema } = require('./schemas/sector.schema');
const { BaseError } = require('../utils/BaseError');

function validateCreateEvent (req, res, next) {    
    const {error} = createEventSchema.validate(req.body);
    
    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

module.exports = {
    validateCreateEvent
}