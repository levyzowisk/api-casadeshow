const couponService = require('../../services/coupon/coupon.service');

async function create(req, res) {
    const coupon = await couponService.create(req.body);
    res.status(201).json(coupon);
}

module.exports = {
    create
}