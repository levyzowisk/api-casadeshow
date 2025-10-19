const artistService =  require('../../services/artist/artist.service');

async function createArtist(req, res, next) {
    const data = await artistService.insert(req.body);
    res.status(200).json(data);
}

async function findArtists(req, res, next) {
    const artists =  await artistService.findArtists(req.body);
    res.status(200).json(artists);
}   

module.exports = {
    createArtist,
    findArtists
}