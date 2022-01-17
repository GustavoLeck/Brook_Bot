const { MessageEmbed } = require('discord.js');
const warning = require('../../config.js');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

 
        if (!queue || !queue.playing) return message.channel.send(`${message.author},`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, nenhuma ${warning.posts.Sound} na sequência.`);

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setTitle(`Server Music List - ${message.guild.name}`);

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} \n(Iniciada por <@${track. requestedBy.id}>)`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `E **${songs - 5}** Outra ${warning.posts.Sound}...` : `Ainda tem **${songs}** ${warning.posts.Sound}(s) na lista.`;

        embed.setDescription(`Reproduzindo atualmente:\n \`${queue.current.title}\`\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs }`);

        embed.setTimestamp();
    

        message.channel.send({ embeds: [embed] });

        const log = (`${print.return.queue}`)
        console.log(log)
    },
};