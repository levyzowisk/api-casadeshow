const  {findByEmail} =  require('../../repositories/user/user.repository');
const { BaseError } = require('../../utils/BaseError');
const { hashPassword, comparePassword } = require('../../utils/bcrypt');
const { verifyToken, generateToken } = require('../../utils/jwt');

async function login(data) {
    const userIsExist = await findByEmail(data.email);
    
    if(!userIsExist) {
        throw new BaseError(409, "Usuário não cadastrado!");
    } 

    const isPasswordValid = await comparePassword(data.password,userIsExist.password);
    if(!isPasswordValid) throw new BaseError(400, "Usuário não autenticado");

    const {id, email, type_user} = userIsExist;

    const acessToken = generateToken({
        id,
        email,
        type_user,
    });

    return acessToken;


}

module.exports = {
    login
}