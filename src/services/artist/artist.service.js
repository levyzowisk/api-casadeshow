const {create} =  require('../../repositories/artist/artist.repository');

async function insert(data) {
    return await create(data);
}


module.exports = {
    insert
}