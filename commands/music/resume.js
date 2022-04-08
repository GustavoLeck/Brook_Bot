const warning = require('../../config/configBot');
const controller = require("../../app/controllers/resume");

module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        controller.resume(message.author.username)

        if (!queue) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**${queue.current.title}**, está sendo reproduzida novamente` : `${message.author}, ${warning.posts.Err}`);

    },
};