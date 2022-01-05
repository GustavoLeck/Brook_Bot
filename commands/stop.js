const Discord = require("discord.js")

module.exports = {
    name: ".stop",
    author: "Gustavo",
    
    run: async(client, message, args) => {
        let queue = player.getQueue(message.guild.id);
        queue.stop();
        message.channel.send(`Sequência de música parada.`);
    }
}