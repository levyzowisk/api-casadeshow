const { prisma } =  require('../../config/database');

async function create(data) {
    return await prisma.user.create({
        data: data,
        omit: {
            password: true
        }
    });
}

async function findByEmail(email) {
    return await prisma.user.findUnique({
        where: {
            email
        },
        omit: {
            password: true
        }
    });
}

module.exports = {
    create,
    findByEmail,
}