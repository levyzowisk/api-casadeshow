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
        },
        include: {
            sector: true,
            event_artist: {omit: {event_id: true}}
        }
    });
}

async function create(event, sectors, artistIds) {
    return await prisma.event.create({
        data: {
            ...event,
            sector: {
                create: sectors,
            },
            event_artist: {
                create: artistIds.map(idDoArtista => ({
                artist: {
                    connect: {
                        id: idDoArtista,
                    },
                },
          })),
            }
        }

    })
}

async function update(id, data) {
    return await prisma.event.update({
        where: {
            id
        },
        data
    })
}

module.exports = {
    find,
    remove,
    findById,
    create,
    update
}