const  {findByEmail, updatePassword} =  require('../../repositories/user/user.repository');
const { BaseError } = require('../../utils/BaseError');
const { hashPassword, comparePassword } = require('../../utils/bcrypt');
const { verifyToken, generateToken } = require('../../utils/jwt');

async function login(data) {
    const userIsExist = await findByEmail(data.email);
    
    if(!userIsExist) {
        throw new BaseError(409, "Usuário não cadastrado!");
    } 

    await comparedPassword(data.password, userIsExist.password)

    const {id, email, type_user} = userIsExist;

    const acessToken = generateToken({
        id,
        email,
        type_user,
    });

    return acessToken;


}

async function changePassword(data) {
    const { email, oldPassword, newPassword } = data
    const userIsExist = await findByEmail(email);

    if(!userIsExist) {
        throw new BaseError(409, 'Usuário não cadastrado!')
    }

    await comparedPassword(oldPassword, userIsExist.password);

    const hashedPassword = await hashPassword(newPassword);

    await updatePassword(email, hashedPassword);

}

async function comparedPassword(plainText, hashPassword) {
    const isPasswordValid = await comparePassword(plainText, hashPassword);
    if(!isPasswordValid) throw new BaseError(400, "Credenciais inválidas");
}

module.exports = {
    login,
    changePassword
}