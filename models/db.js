const mongoose = require('mongoose')
require('dotenv').config();
const mongodb_Url = process.env.mongodb_url ;
const mongourl = 'mongodb://localhost:27017/assignment' 


mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection ;

db.on('connected',() => {
    console.log('database connected....')
})

db.on('disconnected',() => {
    console.log('disconnected')
})

module.exports = db ;