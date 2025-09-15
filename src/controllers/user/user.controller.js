const userService = require('../../services/user/user.service');

async function create(req, res, next) {
    const data = await userService.create(req.body);
    res.status(201).json(data);
}

module.exports = {
    create
}