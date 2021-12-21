const Discord = require('discord.js');
const client = new Discord.Client();
const Config = require('./Config.json');

client.login(Config.token);

client.once('ready', async () =>{
    console.log('O bot foi iniciado.');
})

client.on('messageCreate', () => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm')return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`))return;

    const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
    const command = args.shift().toLowerCase();

    try{
    const commandFile = require(`.commands/${command}.js`)
    } catch (err){
        console.error('Erro' + err);
    }
});
