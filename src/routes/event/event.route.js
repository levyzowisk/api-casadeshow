const express = require('express');
const router = express.Router();

const eventController = require('../../controllers/event/event.controller');
const { validateCreateEvent, validadeUpdateEvent} = require('../../validators/event.validator');
const { checkBody } = require('../../middleware/checkBody');

router.get('/', eventController.find);
router.get('/:id', eventController.findById);
router.delete('/:id', eventController.remove);
router.post('/', checkBody ,validateCreateEvent ,eventController.create); 
router.patch('/:id', checkBody, validadeUpdateEvent, eventController.update);

module.exports = {
    router
}