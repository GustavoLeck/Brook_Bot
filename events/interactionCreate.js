module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = client.player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
          if (!queue || !queue.playing) return int.reply({ content: `Nenhuma ${warning.posts.Sound} tocando no momento.`, ephemeral: true, components: [] });
            int.member.send(`**Faixa salva: \`${queue.current.title}\` | osta\`${queue.current.author}\`, Saved Server: \`${int.member.guild.name}\`**`).then(() => {
                return int.reply({ content: `Enviado mensagem com nome da ${warning.posts.Sound}`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Não consigo enviar mensagem privada.`, ephemeral: true, components: [] });
            });
        }
    }
};