const { BaseError } = require('../utils/BaseError');
const {createCouponSchema}  = require('../validators/schemas/coupon.schema');
function validateCreateCoupon(req, res, next) {
    const {error} =  createCouponSchema.validate(req.body);

    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

module.exports = {
    validateCreateCoupon
}