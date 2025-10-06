const { BaseError } = require('../utils/BaseError');
const {changePasswordSchema}  = require('../validators/schemas/changePassword');
function validateChangePassword(req, res, next) {
    const {error} =  changePasswordSchema.validate(req.body);

    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

module.exports = {
    validateChangePassword
}