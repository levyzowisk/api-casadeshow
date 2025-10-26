const express = require('express');

const router = express.Router();

const exampleController = require('../controllers/example');

router.get('/', exampleController.createExample);

module.exports = {
    router
}