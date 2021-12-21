const Discord = require("discord.js")

module.exports = {
    name: "ping",
    author: "Gustavo",

    run: async(client, message, args) => {

        let cor_da_embed = "daa520 ";

        let ping_do_bot = client.ws.ping;

        let embed_0 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`${message.author}  está calculando seu ping`);

        let embed_1 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`${message.author} está calculando seu ping.`);

        let embed_2 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`${message.author} está calculando seu ping..`);

        let embed_3 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`${message.author} está calculando seu ping...`);
        
        let embed_4 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`O ping de ${message.author} está em \`${ping_do_bot} ms\`.`);

        let comando_ping = await message.reply({embeds: [embed_0] }).then(msg => {
            setTimeout( () => {
                msg.edit({embeds: [embed_0] })
            }, 2000)
            setTimeout( () => {
                msg.edit({embeds: [embed_1] })
            }, 2000)
            setTimeout( () => {
                msg.edit({embeds: [embed_2] })
            }, 2000)
            setTimeout( () => {
                msg.edit({embeds: [embed_3] })
            }, 2000)
            setTimeout( () => {
                msg.edit({embeds: [embed_4] })
            }, 2000)
        })
    }
}