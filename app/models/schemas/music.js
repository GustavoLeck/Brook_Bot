const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    Codigo: {
        type: 'String',
        require: true
    },
    Bot:{
        type: 'String',
        require: true
    },
    Servidor:{
        type: 'String',
        require: true
    },
    Canal_de_Voz:{
        type: 'String',
        require: true
    },
    Nome:{
        type: 'String',
        require: true
    },
    Canal:{
        type: 'String',
        require: true
    },
    Duracao:{
        type: 'String',
        require: true
    },
    Vizualizacao:{
        type: 'String',
        require: true
    },
    Link:{
        type: 'String',
        require: true
    },
    Date:{
        type: 'Date',
        dafault: Date.now()
    },
    Hora:{
        type: 'String',
        require: false
    }
})
mongoose.model('Musica', Valor)



    
