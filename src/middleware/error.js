const {BaseError} = require('../utils/BaseError');

const handlerError = (err, req, res, next) =>  {
    if(err instanceof BaseError) {
        res.status(err.statusCode).json(err.message ? err.message : '');
        return
    }
    if(err instanceof SyntaxError && err.status ===  400) {
        res.status(400).json('JSON inválido. Verifique a sintaxe');
        return
    }    
    res.status(500).json();
    return
}

module.exports = handlerError