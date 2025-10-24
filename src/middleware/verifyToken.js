const { json } = require("express/lib/response");
const { verifyToken } = require("../utils/jwt");

async function validateToken(req, res, next) {
    const [pref, token] = req.headers['authorization'].split(' ');
    verifyToken(token);  
 
    next();
}

module.exports = {
    validateToken
}