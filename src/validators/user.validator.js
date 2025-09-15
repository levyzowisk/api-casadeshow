const { BaseError } = require('../utils/BaseError');
const {createUserSchema} = require('./schemas/user.schema')
function validateCreateUser (req, res, next) {
    const {error} = createUserSchema.validate(req.body);
    
    if(error) {
        return next(new BaseError(400, error.details[0].message))
    }

    next();
}

module.exports = {
    validateCreateUser
}