const express = require('express');

const router = express.Router();

const eventController = require('../../controllers/event/event.controller');

router.get('/', eventController.find);


module.exports = {
    router
}