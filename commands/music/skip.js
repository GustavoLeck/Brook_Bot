const warning = require('../../config.js');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.skip


module.exports = {
    name: 'skip',
    aliases: [],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        log.main(aliases, message.author.username, aliases.description)
 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, ${warning.posts.Sound} pulada` : `${message.author}, ${warning.posts.Err}`);

    },
};