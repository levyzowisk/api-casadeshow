const express = require('express');
const router = express.Router();

const couponController = require('../../controllers/coupon/coupon.controller');
const { checkBody } = require('../../middleware/checkBody');
const { validateCreateCoupon } = require('../../validators/coupon.validator');


router.post('/', checkBody, validateCreateCoupon, couponController.create);
router.get('/', couponController.find);
module.exports = {
    router
}