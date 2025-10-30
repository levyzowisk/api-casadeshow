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

async function find() {
    return await prisma.coupons.findMany()
}
module.exports = {
    create,
    findById,
    find
}