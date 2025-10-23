const express = require('express');
const router = express.Router();

const artistController = require('../../controllers/artist/artist.controller');
const {checkBody} = require('../../middleware/checkBody');
const { validateCreateArtist, validateUpdateArtist } = require('../../validators/artist.validator');

router.post('/', checkBody, validateCreateArtist, artistController.createArtist);
router.get('/', artistController.findArtists);
router.patch('/:id', checkBody, validateUpdateArtist, artistController.update);

module.exports = {
    router
}