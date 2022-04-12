

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports.connection = function(){
mongoose.connect('mongodb+srv://Bot:Super_Senha481526@cluster0.sgfic.mongodb.net/test').then(()=>{
    console.log("=> DB Connected.")}).catch((err)=>{
        console.log("=>DB não conectado: "+err)
    })
}
    
    

