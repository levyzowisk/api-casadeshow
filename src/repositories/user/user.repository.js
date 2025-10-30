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
        }
    });
}

async function updatePassword(email, newPassword) {
    return await prisma.user.update({
        where: {
            email
        },
         data: {
            password: newPassword
         }
    })
}

async function findByID(id) {
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}
module.exports = {
    create,
    findByEmail,
    updatePassword,
    findByID
}