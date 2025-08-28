const {prisma} = require('../../config/database');

async function findByID(id) {
    await prisma.event.findUnique({where: {id}});
}

module.exports = {
    findByID
}