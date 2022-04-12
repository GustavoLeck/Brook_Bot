const { Player, Track } = require('discord-player');
const { Client, Intents, Collection } = require('discord.js');
const { readdirSync } = require('fs');
const controller = require("./app/controllers/play");
const mongo = require("./config/connectionDB")

let client = new Client({
    
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config/configBot');
client.player = new Player(client, client.config.opt.discordPlayer);
mongo.connection();

client.commands = new Collection();
const player = client.player

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    console.log(`-> Loaded event ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
};
console.log(`-> Carregando comandos...`);
readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`      -Comando ${command.name.toLowerCase()} carregado.`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    };
});

player.on('error', (queue, error) => {
    console.log(`A um problema com o faixa da lista => ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Tive problemas para conectar=> ${error.message}`);
});
player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Começando a tocar **${track.title}**\nCanal: **${queue.connection.channel.name}**`);
    controller.playMusic(track, queue.connection.channel)
 });

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**${track.title}** adicionado a lista.`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Alguém do canal de áudio que estou conectado me expulsou, toda a playlist foi apagada!');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Sai do canal de audio já que ele está vazio');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Todas as faixas da lista foram reproduzidas');
});



if(client.config.TOKEN){
client.login(client.config.TOKEN).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})
} else {
console.log("Please Write Your Bot Token Opposite The Token In The config.js File In Your Project!")
}
