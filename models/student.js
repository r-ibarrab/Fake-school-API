const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name must be provided'],
    },
    email:{
        type:String,
        required:[true,'Email must be provided'],
    },
    password:{
        type:String,
        required:[true,'Password must be provided'],
        minlength:[8,'Password must be at least 8 characters long'],
        hide:true,
    },
    studentId:{
        type:String,
        required:[true,'Student ID must be provided'],
        validate: /[m|t|e]\d{6}/,
        minlength: [7,'Student ID must be'],
        maxlength: [7,'Student ID must be'],
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    city:{
        type:String,
        enum:['mxl','tj','ens'],
        required:[true,'City must be provided']
    },
    gpa:{
        type:Number,
    },


})

module.exports = mongoose.model('student',studentSchema)