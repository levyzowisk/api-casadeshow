const { BaseError } = require('../utils/BaseError');
const { createSaleSchema } = require('./schemas/sale.schema');

function validadeCreateSale (req, res, next) {
    const {error} = createSaleSchema.validate(req.body);
    
    if(error) {
        return next(new BaseError(400, error.details[0].message));
    }

    next();
}

module.exports = {
    validadeCreateSale
}