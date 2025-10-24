const {prisma} = require('../../config/database');

async function findByID(id) {
    return await prisma.sector.findUnique({where: {id}});
}

async function update(id, data) {
    return await prisma.sector.update({
        where: {
            id
        },
        data
    })
}

module.exports = {
    findByID,
    update
}