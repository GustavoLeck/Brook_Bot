const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.ping

module.exports = {
    name: 'ping',
    utilisation: '{prefix}ping',

    execute(client, message) {


        setTimeout( () => {
            message.channel.send(`O ping de ${message.author} é de ${client.ws.ping}ms 🛰️`);  
        }, 4000)

        message.channel.send(`\n ${message.author} está calculando seu ping...`);
    
        log.main(aliases, message.author.username, aliases.description)

    },
};