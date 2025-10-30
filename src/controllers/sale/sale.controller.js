const { createSale } = require("../../services/sale/sale.service")

async function create(req, res, next) {
    await createSale(req.body);
    res.status(200).json();
}

module.exports = {
    create
}