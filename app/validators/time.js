const options = {
    timeZone: 'America/Sao_Paulo',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    date: 'string'
};

const time = new Intl.DateTimeFormat(['pt-BR'], options);
const hora = time.format(new Date());

const date = new Intl.DateTimeFormat(['pt-BR']);
const data = date.format(new Date());

module.exports.hora = function() {
    return hora
},

module.exports.data = function() {
    return data
}
   
