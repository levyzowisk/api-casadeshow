const express = require('express');
const router = express.Router();

const saleController = require('../../controllers/sale/sale.controller');
const { checkBody } = require('../../middleware/checkBody');
const { validadeCreateSale } = require('../../validators/sale.schema');

router.post('/', checkBody, validadeCreateSale, saleController.create);
module.exports = {
    router
}