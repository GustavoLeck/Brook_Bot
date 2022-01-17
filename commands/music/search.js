const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');
const print = require('../../log/logConsole.js')

module.exports = {
    name: 'search',
    aliases: [],
    utilisation: '{prefix}search [song name]',
    voiceChannel: true,

    async execute(client, message, args) {
      
if (!args[0]) return message.channel.send(`${message.author}, coloque o nome da faixa que deseja pesquisar.`);

        const res = await client.player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`${message.author}, pesquisa sem resultados.`);

        const queue = await client.player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle(`Buscando: ${args.join(' ')}`);

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nEscolha uma ${warning.posts.Sound} entre **1**  **${maxTracks.length}** digite o numero da ${warning.posts.Sound} que deseja tocar, ou digite *0* para cancelar`);

        embed.setTimestamp();
        embed.setFooter('Edited by Umut Bayraktar ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

       collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === '0') return message.channel.send(`Busca cancelada.`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`Erro: Digite um valor entre **1** e **${maxTracks.length}** para selecionar a ${warning.posts.Sound}, ou digite *0* para cancelar a busca.`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await client.player.deleteQueue(message.guild.id);
                return message.channel.send(`${message.author}, I can't join audio channel. ❌`);
            }

            await message.channel.send(`Loading your music call. 🎧`);

            queue.addTrack(res.tracks[Number(query.content)-1]);
            if (!queue.playing) await queue.play();
           
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`${message.author}, Song search time expired ❌`);
        });

        const log = (`${print.return.search}`)
        console.log(log)

    },
};