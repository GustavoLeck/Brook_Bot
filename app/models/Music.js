const mongoose = require('mongoose');
require("./schemas/music.js")
const Musica = mongoose.model('Musica')

module.exports.Music = function(valor){

    new Musica(valor).save().then(() => {
        console.log(`   =>Registro de música inserido: ${valor.Nome}`)
    }).catch((err) => {
        console.log("Erro ao registrar Musica: "+err)
    })
}
    
