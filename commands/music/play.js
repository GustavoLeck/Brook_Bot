const { QueryType } = require('discord-player');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.play

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,
    titulo: null,

    async execute(client, message, args) {
if (!args[0]) return message.channel.send(`${message.author}, escreva o nome, ou coloque o link que você deseja ouvir depois do comando.`);

        const res = await client.player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`${message.author}, pesquisa sem resultados!`);

        const queue = await client.player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await client.player.deleteQueue(message.guild.id);
            return message.channel.send(`${message.author}, não consigo acessar o canal de voz.`);
        }

        await message.channel.send(`${res.playlist ? 'Sua Playlist' : 'Sua faixa'} está sendo carregada... `);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
        
        //Validação para objetos indefinidos que são chamados pela API

        //Validacao para salvar na tabela LOG e MUSICA
        if (res.tracks[0] == undefined) {
            log.main(aliases, message.author.username, 'indedefinido')
            console.log("Valores não disponiveis")
            log.indefinido()
          } else {
            log.main(aliases, message.author.username, res.tracks[0]['title'])       
          }
    },
};