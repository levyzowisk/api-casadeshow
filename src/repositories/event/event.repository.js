const {prisma} = require('../../config/database');

async function find(take , skip ) {
    return await prisma.event.findMany({
        take,
        skip,
    });
}

async function remove(id) {
    await prisma.event.delete({where:
        {
            id
        }
    })
}

async function findById(id) {
    return await prisma.event.findUnique({
        where: {
            id
        }
    });
}

async function create(data, idSector) {
    return await prisma.event.create({data: {
        sector_id: idSector,
        ...data
    }})
}

module.exports = {
    find,
    remove,
    findById,
    create
}