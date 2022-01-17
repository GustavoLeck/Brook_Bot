const warning = require('../../config.js');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        const log = (`${print.return.resume}`)
        console.log(log)

        if (!queue) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**${queue.current.title}**, está sendo reproduzida novamente` : `${message.author}, ${warning.posts.Err}`);
        
    },
};