const exampleService = require('../services/example')

async function createExample(req, res) {
    const data = await exampleService.createExample();
    res.status(200).json(data);
    
} 

module.exports = {
    createExample
}