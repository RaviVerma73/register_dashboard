const mongoose = require("mongoose");



const DB = "mongodb+srv://ravi:Ravi7317@cluster0.9u1btwg.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));