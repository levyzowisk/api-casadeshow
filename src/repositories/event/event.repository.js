const {prisma} = require('../../config/database');

async function find(take , skip ) {
    return await prisma.event.findMany();
}