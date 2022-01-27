const warning = require('../../config.js');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.pause

module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        log.main(aliases, message.author.username, aliases.description)

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `A ${warning.posts.Sound} atual **${queue.current.title}** está` : `${message.author},${warning.posts.NotPlayineRR}`);
    },
    
};