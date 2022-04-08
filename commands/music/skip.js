const warning = require('../../config/configBot');
const controller = require("../../app/controllers/skip");

module.exports = {
    name: 'skip',
    aliases: [],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        controller.skip(message.author.username)
 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, ${warning.posts.Sound} pulada` : `${message.author}, ${warning.posts.Err}`);

    },
};