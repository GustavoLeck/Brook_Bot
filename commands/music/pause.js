const warning = require('../../config.js');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        const log = (`${print.return.pause}`)
        console.log(log)

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `A ${warning.posts.Sound} atual **${queue.current.title}** está` : `${message.author},${warning.posts.NotPlayineRR}`);
    },
    
};