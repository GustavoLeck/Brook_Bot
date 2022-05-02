const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const log = new Schema({
    Bot: {
        type: 'String',
        require: true
    },
    Nome:{
        type: 'String',
        require: true
    },
    Autor:{
        type: 'String',
        require: true
    },
    Data:{
        type: 'String',
        require: true
    },
    Hora:{
        type: 'String',
        require: false
    },
    Descricao:{
        type: 'String',
        default: null
    }
})
mongoose.model('Log', log)

    
