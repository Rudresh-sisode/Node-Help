const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/evs')

mongoose.connection.on('connected',()=>{
    console.log('db connected successfully');
})

mongoose.connection.on('error',()=>{
    console.log('Error while connecting with DB');
})

mongoose.connection.on('disconnected',()=>{
    console.log('DB Disconnected !!')
})
//timestamp is 1:20:11