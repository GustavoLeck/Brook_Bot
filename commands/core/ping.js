const controller = require("../../app/controllers/ping");
module.exports = {
    name: 'ping',
    utilisation: '{prefix}ping',

    execute(client, message) {


        setTimeout( () => {
            message.channel.send(`O ping de ${message.author} é de ${client.ws.ping}ms 🛰️`);  
        }, 4000)

        message.channel.send(`\n ${message.author} está calculando seu ping...`);
    
        controller.ping(message.author.username)
    },
};