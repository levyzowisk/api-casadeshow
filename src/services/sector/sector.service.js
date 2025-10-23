const sectorRepository =  require('../../repositories/sector/sector.repository')
const { BaseError } = require('../../utils/BaseError')
async function findByID(id) {
    await isExistsSector(id);
    return await sectorRepository.findByID(id);
}

async function isExistsSector(id) {
    if(! await sectorRepository.findByID(id)) {
        throw new BaseError(404, 'Setor não existente');
    }
}

async function update(id, data) {
    await isExistsSector(id);
    return await sectorRepository.update(id, data);
}

module.exports = {
    findByID,
    update
}