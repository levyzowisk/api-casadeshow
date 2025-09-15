const { hash } = require('bcrypt'); 
const hashPassword = (text) => {
    return hash(text, Number(process.env.SALT) || 10);
}

module.exports = {
    hashPassword
}