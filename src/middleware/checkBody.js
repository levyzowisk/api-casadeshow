async function checkBody(req, res, next) {
    if(!req.body) {
        return res.status(400).json('JSON não definido');
    }
    next()
}

module.exports =  {
    checkBody
}