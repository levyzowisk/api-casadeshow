const eventRepository = require('../../repositories/event/event.repository');

async function find(take, skip) {
    console.log(take);
    console.log(skip);
    
    
    take === undefined ? take = 5 : take;
    skip === undefined ? skip = 0 : skip;
    
    console.log(take);
    console.log(skip);
    
    return await eventRepository.find(take, skip);
}

module.exports = {
    find
}