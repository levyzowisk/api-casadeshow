const eventService = require('../../services/event/event.service');

async function find(req, res, next) {
     const data = await eventService.find(req.query.take, req.query.skip);
     res.status(200).json(data);
}

async function remove(req, res, next) {
    await eventService.remove(req.params.id);
    res.status(204).json();
}

async function create(req,res, next) {
    await eventService.create(req.body, req.params.idSector);
}


module.exports ={
    find,
    remove,
    create
}