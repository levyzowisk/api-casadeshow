const eventService = require('../../services/event/event.service');

async function find(req, res) {
     const data = await eventService.find(req.query.take, req.query.skip);
     res.status(200).json(data);

}

module.exports ={
    find
}