const {prisma} = require('../../config/database');

async function find(take , skip ) {
        return await prisma.event.findMany();
}

async function findById(id) {
    return await prisma.event.findUnique({
        where: {
            id
        }
    });
}

module.exports = {
    find,
    findById
}