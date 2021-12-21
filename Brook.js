<<<<<<< HEAD
 Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 
=======
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING
    ]
});

const Config = require("./Config.json");
>>>>>>> 23c45583f195dc987a60653036abdd2e9376d6d8

client.login(config.token); 

client.once('ready', async () => {

    console.log("✅ - Estou online!")

<<<<<<< HEAD
})
=======
client.once('ready', async () =>{
    console.log('O bot foi iniciado.');
    client.user.setActivity("", {type:'LISTENING'});
});
>>>>>>> 23c45583f195dc987a60653036abdd2e9376d6d8

client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});