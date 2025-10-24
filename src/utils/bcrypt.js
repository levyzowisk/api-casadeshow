const { hash, compare } = require('bcrypt'); 
const hashPassword = (text) => {
    return hash(text, Number(process.env.SALT) || 10);
}

const comparePassword = (plainText, hashText) => {
    return compare(plainText, hashText);
}

module.exports = {
    hashPassword,
    comparePassword
}