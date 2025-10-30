const couponRepository = require("../../repositories/coupon/coupon.repository");
const { BaseError } = require("../../utils/BaseError");

async function create(data) {
   await isExistsCouponCode(data.code);

   return await couponRepository.create(data);
}

async function isExistsCouponCode(code) {
    if(await couponRepository.findById(code)) {
        throw new BaseError('404', 'Código de cupon já existente!');
    }
}

async function find() {
    return await couponRepository.find();
}
module.exports = {
    create,
    find
}