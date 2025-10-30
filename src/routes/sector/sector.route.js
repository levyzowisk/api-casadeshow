const express = require('express');
const router = express.Router();

const sectorController = require('../../controllers/sector/sector.controller');
const { checkBody } = require('../../middleware/checkBody');
const { validadeUpdateEvent } = require('../../validators/event.validator');

router.patch('/:id', checkBody, validadeUpdateEvent, sectorController.update);
router.get('/:id', sectorController.findById);
router.get('/', sectorController.find);

module.exports = {
    router
}