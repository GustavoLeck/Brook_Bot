const print = require('../../log/logConsole.js')

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {


        setTimeout( () => {
            message.channel.send(`O ping de ${message.author} é de ${client.ws.ping}ms 🛰️`);  
        }, 4000)

        message.channel.send(`\n ${message.author} está calculando seu ping...`);
        
        const log = (`${print.return.ping}`)
        console.log(log)

    },
};