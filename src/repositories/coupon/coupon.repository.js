const { prisma } = require("../../config/database");

async function create(data) {
    return await prisma.coupons.create({
        data
    });
}

async function findById(code) {
    return await prisma.coupons.findUnique({
        where: {
            code
        }
    })
}
module.exports = {
    create,
    findById
}