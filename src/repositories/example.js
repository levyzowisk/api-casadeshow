const {prisma} = require('../config/database');

async function create() {
    return await prisma.example.create({
        data: {
            id: '1',
            name: 'Levy Pereira Sousa',
            age: 18
        }
    })
}

module.exports = {
    create
}