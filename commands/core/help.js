const { MessageEmbed } = require('discord.js');
const log = require('../../log/logCreator.js');
const base = require('../../log/logDate.js');
const aliases  = base.help

module.exports = {
    name: 'help',
    aliases: ['h',"yardım"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('To access this music bot: [Umut Bayraktar Music Bot](https://youtube.com/UmutBayraktarYT), need more help You can get help by joining our Discord Community.\nHow about creating your own music world?') ;
        embed.addField(`Available - ${commands.size} Command Available`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
  
        message.channel.send({ embeds: [embed] });

        log.main(aliases, message.author.username, aliases.description)
    },
};
