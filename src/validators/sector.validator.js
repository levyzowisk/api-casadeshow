const { BaseError } = require('../utils/BaseError');
const { updateSectorSchema } = require('./schemas/sector.schema');

function validateUpdateSector(req, res, next) {    
    const {error} = updateSectorSchema.validate(req.body);
    
    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

module.exports = {
    validateCreateEvent
}