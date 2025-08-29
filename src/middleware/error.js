const {BaseError} = require('../utils/BaseError');
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library')
const handlerError = (err, req, res, next) =>  {
    console.log(err);
    
    if(err instanceof BaseError) {
        res.status(err.statusCode).json(err.message ? err.message : '');
        return;
    }
    if(err instanceof SyntaxError && err.status ===  400) {
        res.status(400).json('JSON inválido. Verifique a sintaxe');
        return;
    }   
    if(err instanceof PrismaClientKnownRequestError) {
        if(err.code === 'P2025') {
            res.status(404).json('Recurso não encontrado');
            return
        }

    }
    
    
    res.status(400).json(err.message);
    return
}


module.exports = handlerError