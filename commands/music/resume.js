const warning = require('../../config.js');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.resume

module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        log.main(aliases, message.author.username, aliases.description)

        if (!queue) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**${queue.current.title}**, está sendo reproduzida novamente` : `${message.author}, ${warning.posts.Err}`);

    },
};