const express = require('express');
const router = express.Router();

const artistController = require('../../controllers/artist/artist.controller');
const {checkBody} = require('../../middleware/checkBody');
const { validateCreateArtist } = require('../../validators/artist.validator');

router.post('/', checkBody, validateCreateArtist, artistController.createArtist)

module.exports = {
    router
}