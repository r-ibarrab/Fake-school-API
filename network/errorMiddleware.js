const chalk = require('chalk')
const response = require('./response')

function errorMiddleware(err,req,res,next){
    console.log(chalk.red("[SERVER ERROR]: ",err.message))

    response.error(req,res,err)
}

module.exports = errorMiddleware