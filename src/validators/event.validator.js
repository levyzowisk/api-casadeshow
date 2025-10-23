const { createEventSchema, updateEventSchema } = require('./schemas/event.schema');
const { BaseError } = require('../utils/BaseError');

function validateCreateEvent (req, res, next) {    
    const {error} = createEventSchema.validate(req.body);
    
    
    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

function validadeUpdateEvent(req, res, next) {
    const { error } = updateEventSchema.validate(req.body);

    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

module.exports = {
    validateCreateEvent,
    validadeUpdateEvent,
}