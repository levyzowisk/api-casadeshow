const {login: loginService} = require('../../services/auth/auth.service');

async function login(req, res, next) {
    const data = await loginService(req.body)
    res.status(200).json(data);
}


module.exports = {
    login
}