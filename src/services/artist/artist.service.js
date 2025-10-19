const artistRepository =  require('../../repositories/artist/artist.repository');

async function insert(data) {
    return await artistRepository.create(data);
}

async function findArtists() {
    return await artistRepository.findArtists();
}
module.exports = {
    insert,
    findArtists
}