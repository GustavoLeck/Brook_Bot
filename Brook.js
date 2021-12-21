const Discord = require('discord.js');
const client = new Discord.Client();
const yt = require('ytdl-core');
const Config = require('./Config.json');
const ConfigServer = require('./ConfigServer.json');
const servidores = ConfigServer.server.connection;


client.on ("ready", () => {
    console.log('O bot foi iniciado.');
});

client.on("message", async (msg) => {
    
    //Filtros
    if (!msg.guild) return;
    
    if (!msg.content.startsWith(Config.prefix))return;
    
    if (!msg.member.voice.channel){
    msg.reply('Você não está em nenhum canal de voz seu cocô!!!');
    return;
    }
    //Comandos
    if (msg.content === Config.prefix + "ping"){
        servidores = await Discord.Message.channel.send("Calculando...")
        servidores.edit('Ping de ${m.createdTimestamp - message.createdTimestamp}ms. A latencia da API é ${Math.round(client.ping)}ms')
    }else;

    if (msg.content === Config.prefix + "parar"){
        servidores = await msg.member.voice.channel.leave();
        msg.channel.send("fora");
    }else;
});

client.login(Config.token);