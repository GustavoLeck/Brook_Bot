const maxVol = require("../../config.js").opt.maxVol;
const warning = require('../../config.js');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.volume

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

        log.main(aliases, message.author.username, aliases.description)

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Volume atual: **${queue.volume}** 🔊\n**Para alterar o volume, digite um numero entre \`1\` e \`${maxVol}\`.**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, o volume que você deseja alterar já é o volume atual`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **Digite um numero entre\`1\` e \`${maxVol}\` para alterar o volume`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Volume alterado para: **${vol}**/**${maxVol}**.` : `${message.author}, ${warning.posts.Err}`) ;
    },
};