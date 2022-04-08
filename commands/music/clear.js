const warning = require('../../config/configBot');
const controller = require("../../app/controllers/clear");

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

        controller.clear(message.author.username)
    },
};