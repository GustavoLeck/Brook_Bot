const Discord = require("discord.js")

module.exports = {
    name: "...",
    author: "...",
    
    run: async(client, message, args) => {

        let queue = player.getQueue(message.guild.id);
        queue.skip();
        message.channel.send(`Skiped`);
    }
}