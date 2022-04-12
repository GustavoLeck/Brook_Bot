require("dotenv").config();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports.connection = function(){
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("=> DB Connected.")}).catch((err)=>{
        console.log("=>DB não conectado: "+err)
    })
}
    
    

