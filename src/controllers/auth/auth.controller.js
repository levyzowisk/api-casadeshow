const {login: loginService, changePassword: modifyPassword} = require('../../services/auth/auth.service');

async function login(req, res, next) {
    const data = await loginService(req.body)
    res.status(200).json(data);
}

async function changePassword(req, res, next) {
    await modifyPassword(req.body);
    res.status(200).json();
}

module.exports = {
    login,
    changePassword
}