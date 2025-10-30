const sectorService = require('../../services/sector/sector.service');

async function update(req, res, next) {
    const sectorUpdated = await sectorService.update(req.params.id, req.body);
    res.status(200).json(sectorUpdated);

}

async function findById(req, res, next) {
    const sector= await sectorService.findByID(req.params.id);
    res.status(200).json(sector);
}
module.exports = {
    update,
    findById
}
