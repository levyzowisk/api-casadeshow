const { BaseError } = require('../utils/BaseError');
const { loginSchema } = require('../validators/schemas/login.schema');

function validateLogin (req, res, next) {
    const {error} = loginSchema.validate(req.body);
    
    if(error) {
        return next(new BaseError(400, error.details[0].message))
    }

    next();
}

module.exports = {
    validateLogin
}