const artistRepository =  require('../../repositories/artist/artist.repository');

async function insert(data) {
    return await artistRepository.create(data);
}

async function findArtists() {
    return await artistRepository.findArtists();
}

async function findById(id) {
    const artist = await artistRepository.findById(id);
    if(! artist) {
        throw new BaseError(404, 'Artista não existente');
    }
    return artist;
}

async function update(id, data) {
    await findById(id);
    return await artistRepository.update(id, data);
}

module.exports = {
    insert,
    findArtists,
    update
}