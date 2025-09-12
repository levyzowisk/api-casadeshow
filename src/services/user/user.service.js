const { create: createRepo, findByEmail } = require('../../repositories/user/user.repository');
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


module.exports = {
    create, 
}

