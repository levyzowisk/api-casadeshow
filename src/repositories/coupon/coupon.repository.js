const { prisma } = require("../../config/database");

async function create(data) {
    return await prisma.coupons.create({
        data
    });
}

async function findByCode(code) {
    return await prisma.coupons.findUnique({
        where: {
            code
        }
    })
}

async function find() {
    return await prisma.coupons.findMany()
}


async function findById(id) {
    return await prisma.coupons.findUnique({
        where: {
            id
        }
    })
}
module.exports = {
    create,
    findByCode,
    find,
    findById,
}