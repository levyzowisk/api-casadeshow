const { prisma } = require('../../config/database');

async function create(data) {
    return await prisma.artist.create({data});
}

async function findArtistsById(ids) {
    return await prisma.artist.findMany({
        where: {
            id: {
                in: ids
            }
        }
    })
}

async function findArtists() {
    return await prisma.artist.findMany();
}

async function findById(id) {
    return await prisma.artist.findUnique({
        where: {
            id
        }
    })
} 

async function update(id, data) {
    return await prisma.artist.update({
        where: {
            id
        },
        data
    })
}


module.exports = {
    create,
    findArtistsById,
    findArtists,
    update,
    findById,
}