const {sign, verify} = require('jsonwebtoken');

const generateToken = (payload) => {
    return sign(payload, process.env.SECRET_KEY_JWT || "oisom", {
        expiresIn: '10m',

    });   
}

const verifyToken = (token) => {
    return verify(token, process.env.SECRET_KEY_JWT || "oisom");
}

module.exports = {
    generateToken,
    verifyToken,
}