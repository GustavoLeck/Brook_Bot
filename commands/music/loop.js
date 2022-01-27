const { QueueRepeatMode } = require('discord-player');
const warning = require('../../config');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.loop;
const descp = '*';


module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);
        
        log.main(aliases, message.author.username, aliases.description);
 
if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, você deve desativar o modo de loop da ${warning.posts.Sound} existente primeiro.`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inativo' : 'Ativo'}** \nToda a sequencia será repetida` : `${message.author}, `);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, no modo Loop você deve desabilitar a fila existente primeiro **(${client.config.px} fila de loop)`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inativo' : 'Ativo'}** \nA ${warning.posts.Sound} atual será repetida sem parar caso o modo esteja  **Ativo.**` : `${message.author}, ${warning.posts.Err}`);
};
    },

};