module.exports = async (client) => {
    console.log(`Bot iniciado com sucesso.`);
    client.user.setActivity(client.config.playing);
};