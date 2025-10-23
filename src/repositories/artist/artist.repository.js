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

module.exports = {
    create,
    findArtistsById,
    findArtists
}