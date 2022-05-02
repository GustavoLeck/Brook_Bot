const mongoose = require('mongoose');
require("./schemas/log.js")
const Log = mongoose.model('Log')

module.exports.Log = function(valor){

    new Log(valor).save().then(() => {
        console.log(`   =>Registro de log inserido: Comando ${valor.Nome}`)
    }).catch((err) => {
        console.log("Erro ao registrar Log: "+err)
    })
}
    
