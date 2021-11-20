const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name must be provided'],
    },
    email:{
        type:String,
        required:[true,'Email must be provided'],
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    },
    password:{
        type:String,
        required:[true,'Password must be provided'],
        minlength:[8,'Password must be at least 8 characters long'],
        hide:true,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('teacher',studentSchema)