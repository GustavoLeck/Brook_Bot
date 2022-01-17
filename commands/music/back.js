const warning = require('../../config.js');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'back',
    aliases: [],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, nenhuma ${warning.posts.Sound} estava sendo tocada anteriormente`);

        await queue.back();

        message.channel.send(`Começando a tocar ${warning.posts.Sound} anterior...`);
        
        const log = (`${print.return.back}`)
        console.log(log)
    },
};