const sectorService = require('../../services/sector/sector.service');

async function update(req, res, next) {
    const sectorUpdated = await sectorService.update(req.params.id, req.body);
    res.status(200).json(sectorUpdated);

}

module.exports = {
    update
}
