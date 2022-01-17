const warning = require('../../config.js');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'skip',
    aliases: [],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        const log = (`${print.return.skip}`)
        console.log(log)

 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, ${warning.posts.Sound} pulada` : `${message.author}, ${warning.posts.Err}`);

    },
};