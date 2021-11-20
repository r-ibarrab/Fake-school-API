require('express-async-errors')
const {api:{port,nodeEnv}} = require('./config')

// Express App
const express = require('express')
const app = express()

// Mongo DB import
const connectDB = require('./db/connection')

//Middlewares
app.use(express.json())

// Dev Middlewares
if(nodeEnv == 'development'){
    const morgan = require('morgan')
    app.use(morgan('dev'))
}

//Routes
const Student = require('./routes/student')
const Teacher = require('./routes/teacher')

const errorMiddleware = require('./network/errorMiddleware')


// Routing
app.use('/api/v1/students',Student)
app.use('/api/v1/teachers',Teacher)


app.use(errorMiddleware)

// Connect to db and start server function
const start = async () =>{
    try{
        await connectDB()
        console.log('Database connected')
        app.listen(port,console.log('Runnning on port:',port))
    }catch(e){
        console.log(e)
    }
}


start()