const exampleRepository = require('../repositories/example')

async function createExample() {
    return await exampleRepository.create();
    
}

module.exports ={
    createExample
}