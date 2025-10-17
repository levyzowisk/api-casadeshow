const { insert } =  require('../../services/artist/artist.service');

async function createArtist(req, res, next) {
    const data = await insert(req.body);
    res.status(200).json(data);
}

module.exports = {
    createArtist
}