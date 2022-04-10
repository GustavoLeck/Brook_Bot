const warning = require('../../config/configBot');
const controller = require("../../app/controllers/pause");

module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    

    execute(client, message) {
        controller.pause(message.author.username)

        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `A ${warning.posts.Sound} atual **${queue.current.title}** está` : `${message.author},${warning.posts.NotPlayineRR}`);
    }, 
};