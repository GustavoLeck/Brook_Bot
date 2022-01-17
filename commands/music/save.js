const warning = require('../../config.js');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'save',
    aliases: [],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        const log = (`${print.return.save}`)
        console.log(log)


  if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        message.author.send(`Faixa registrada **${queue.current.title}** | ${queue.current.author}, Saved server: **${message.guild.name}**`) .then(() => {
            message.channel.send(`Enviado mensagem com nome da ${warning.posts.Sound}`);
        }).catch(error => {
            message.channel.send(`${message.author}, não consigo enviar mensagem privada.`);
        });
    },
};