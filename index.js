require('express-async-errors')
const {api:{port,nodeEnv}} = require('./config')

const express = require('express')
const app = express()


if(nodeEnv == 'development'){
    const morgan = require('morgan')
    app.use(morgan('dev'))
}





const start = () =>{
    try{
        
        app.listen(port,console.log('runnning'))
    }catch(e){
        console.log(e)
    }
}

start()