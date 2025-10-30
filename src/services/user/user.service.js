const { create: createRepo, findByEmail, findByID: findByIDRepo } = require('../../repositories/user/user.repository');
const {BaseError} =  require('../../utils/BaseError');
const { hashPassword } = require('../../utils/bcrypt');
const { generateToken } = require('../../utils/jwt');

async function create(data) {
    if(await findByEmail(data.email)) {
        throw new BaseError(409, "Usuário já cadastrado!");
    }

    const passwordHashed = await hashPassword(data.password);
    
    data.password = passwordHashed;

    await createRepo(data);

}

async function findByID(id) {
    const user = await findByIDRepo(id);
    if(!user) {
       throw new BaseError(404, 'Usuário não encontrado');
    }
    return user;
}


module.exports = {
    create, 
    findByID
}

