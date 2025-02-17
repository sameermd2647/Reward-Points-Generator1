const mongoose = require('mongoose')

mongoose.set('strictQuery',false);

mongoose.connect(`mongodb://localhost:27017/receipt`,{
      useNewUrlParser: true 
})

mongoose.connection.on("error", err => {
    console.log('connection error',err)
})

mongoose.connection.on("connected",(err,res) => {
    console.log('connected to database')
})