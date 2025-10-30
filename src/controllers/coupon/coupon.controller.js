const couponService = require('../../services/coupon/coupon.service');

async function create(req, res) {
    const couponCreated = await couponService.create(req.body);
    res.status(201).json(couponCreated);
}

async function find(req, res) {
    const coupons = await couponService.find();
    res.status(200).json(coupons);
}

async function findById(req, res) {
    const coupon = await couponService.findById(req.params.id);
    res.status(200).json(coupon);
}
module.exports = {
    create,
    find,
    findById
}