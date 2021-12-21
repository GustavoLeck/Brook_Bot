const Discord = require("discord.js")

module.exports = {
    name: "ping",
    author: "Gustavo",

    run: async(client, message, args) => {

        let cor_da_embed = "GREEN";

        let ping_do_bot = client.ws.ping;

        let embed_0 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription
        (`!help = Comandos disponiveis\n `+ 
         `!ping = Latência do Bot`);

        let comando_help = await message.reply({embeds: [embed_0] }).then(msg => {
        })
    }
}