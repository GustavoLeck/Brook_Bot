const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const warning = require('../../config.js');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.nowplaying
const descp = '*';

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

 if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setTitle(track.title)

        const methods = ['Desabilitado', 'Faixa', 'Lista'];

        const timestamp = queue.getPlayerTimestamp();
const trackDuration = timestamp.progress == 'Forever' ? 'Endless (Live)' : track.duration;

        embed.setDescription(`Audio: **%${queue.volume}**\nDuração: **${trackDuration}**\nModo de repetição: **${methods[queue.repeatMode]}**\n${track. requestedBy}`);

        const saveButton = new MessageButton();

        saveButton.setLabel('Salvar Musica');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCESSO');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });

        log.main(aliases, message.author.username, aliases.description)
    },
};