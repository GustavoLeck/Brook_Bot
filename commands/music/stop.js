const warning = require('../../config.js');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'stop',
    aliases: ['st'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        queue.destroy();

        message.channel.send(`Lista de reprocução cancelada.`);

        const log = (`${print.return.skip}`)
        console.log(log)

    },
};