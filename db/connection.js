const mongoose = require('mongoose')
const {db:{uri}} = require('../config')

const connectDB = () =>{
    return mongoose.connect(uri)
}

module.exports = connectDB