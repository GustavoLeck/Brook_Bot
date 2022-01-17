const warning = require('../../config.js');

module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

   if (!queue || !queue.playing) return message.channel.send(`${message.author}, ${warning.posts.NotPlaying}`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`${message.author}, Insira um nome de filtro válido.`);

        const filters = [];
        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`${message.author},Não encontrei um filtro com este nome.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Applied: **${filter}**, Filter Status: **${queue.getFiltersEnabled().includes(filter) ? 'Active' : 'Inactive'}** ✅\n **Remember, if the music is long, the filter application time may be longer accordingly.**`);

        const log = (`${print.return.filter}`)
        console.log(log)
    },

    
};