const chalk = require('chalk')
const response = require('./response')
const setErrorNamesAndStatus = require('../utils/errors')

function errorMiddleware(err,req,res,next){
    console.log(chalk.red("[SERVER ERROR]: ",err.message))
    err = setErrorNamesAndStatus(err)
    response.error(req,res,err)
}

module.exports = errorMiddleware