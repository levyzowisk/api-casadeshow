const eventService = require('../../services/event/event.service');

async function find(req, res, next) {
     const data = await eventService.find(req.query.take, req.query.skip);
     res.status(200).json(data);
}

async function findById(req, res, next) {
     const data = await eventService.findById(req.params.id);
     res.status(200).json(data);
}

async function remove(req, res, next) {
    await eventService.remove(req.params.id);
    res.status(204).json();
}

async function create(req,res, next) {
    const event = await eventService.create(req.body);
    res.status(200).json(event);
}

async function update(req, res, next) {
    const eventUpdated = await eventService.update(req.params.id, req.body);
    res.status(200).json(eventUpdated);
}

module.exports ={
    find,
    remove,
    create,
    findById,
    update
}