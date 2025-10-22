const { findArtistsById } = require('../../repositories/artist/artist.repository');
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

    const event = await eventRepository.findById(id);
    if(!event) {
        throw new BaseError(404 ,'Evento inexistente');
    }
    return event;
}

async function create(data) {
    const {sectors, artistIds, ...event} = data
    const commomId = await findArtistsById(artistIds);

    if(commomId.length !== artistIds.length) {
        throw new BaseError(400, "Artista não existente");
    }

    return await eventRepository.create(event, sectors, artistIds);
}

module.exports = {
    find, remove, create, findById
}