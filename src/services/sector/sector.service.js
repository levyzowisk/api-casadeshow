const {findByID} =  require('../../repositories/sector/sector.repository')
const { BaseError } = require('../../utils/BaseError')
async function findByID(id) {
    await isExistsSector(id);
    return await findByID(id);
}

async function isExistsSector(id) {
    if(! await findByID(id)) {
        throw new BaseError(404, 'Setor não existente');
    }
}

module.exports = {
    findByID
}