require('dotenv/config')

module.exports = {
    api:{
        port:process.env.PORT,
        nodeEnv:process.env.NODE_ENV
    },
    db:{
        uri:process.env.MONGO_URI
    }
}