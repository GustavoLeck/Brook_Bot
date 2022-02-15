module.exports = {
        TOKEN: 'OTEzMTU0NjI1MjM3MDUzNTUx.YZ6XhA.K4ZXU6szcBqrd9hk2VovJb1fa6o', //your discord bot token
        px: '-',

    opt: {
        DJ: {
            enabled: false, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: 'DJ', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        maxVol: 250, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            } 
        }
    },
    posts:{
            NotPlaying: "Não há musicas disponiveis para tocar no momento.",
            Err: "Ocorreu algum erro. Verifique!",
            Sound: "faixa"
    }
};
