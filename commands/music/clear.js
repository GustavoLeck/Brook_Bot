const warning = require('../../config.js');
const print = require('../../log/logConsole.js')


module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, nenhuma ${warning.posts.Sound} na fila após esta.`);

        await queue.clear();

        message.channel.send(`Fila evaziada com sucesso!`);

        const log = (`${print.return.clear}`)
        console.log(log)

    },
};