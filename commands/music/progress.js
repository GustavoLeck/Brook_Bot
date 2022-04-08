const { Message } = require('discord.js');
const warning = require('../../config/configBot');
const controller = require("../../app/controllers/progress");

module.exports = {
    name: 'progress',
    aliases: ["time"],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();
        const song = queue.current.title;

        if (timestamp.progress == 'Infinity') return message.channel.send(`Esta ${warning.posts.Sound} é transmitida ao vivo, não é possivel mostrar o progresso`);

        message.channel.send(`${song} \n${progress} (**${timestamp.progress}**%)`);

        controller.progress(message.author.username)
    },
};