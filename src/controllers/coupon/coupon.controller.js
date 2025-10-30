const couponService = require('../../services/coupon/coupon.service');

async function create(req, res) {
    const coupon = await couponService.create(req.body);
    res.status(201).json(coupon);
}

async function find(req, res) {
    const coupons = await couponService.find();
    res.status(200).json(coupons);
}
module.exports = {
    create,
    find,
}