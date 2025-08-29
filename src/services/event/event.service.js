const eventRepository = require('../../repositories/event/event.repository');
const { findByID: findSectorByID } = require('../../repositories/sector/sector.repository');
const {BaseError} = require('../../utils/BaseError');

async function find(take, skip) {
    
    take === undefined ? take = 5 : take;
    skip === undefined ? skip = 0 : skip;
    
    return await eventRepository.find(take, skip);
}

async function remove(id) {
    await eventRepository.remove(id);
}

async function findById(id) {
    
    id === Number(id) ? id : new BaseError(404)
    
    return await eventRepository.findById(id);
}

async function isExistsEvent(id) {
    if(! await eventRepository.findById(id)) {
        throw new BaseError(404 ,'Evento inexistente');
    }
    
}

async function create(data, idSector) {
    await findSectorByID(idSector);
    await eventRepository.create(data);
}

module.exports = {
    find, remove, create, findById
}