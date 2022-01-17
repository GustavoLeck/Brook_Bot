const base = require('./logDate.js');

module.exports = {

return:{
    ping: `${base.ping.description} (${base.ping.id} - ${base.ping.name}) // ${base.ping.date}`,
    help: `${base.help.description} (${base.help.id} - ${base.help.name}) // ${base.help.date}`,
    back: `${base.back.description} (${base.back.id} - ${base.back.name}) // ${base.back.date}`,
    clear: `${base.clear.description} (${base.clear.id} - ${base.clear.name}) // ${base.clear.date}`,
    filter: `${base.filter.description} (${base.filter.id}- ${base.filter.name}) // ${base.filter.date}`,
    loop: `${base.loop.description} (${base.loop.id} - ${base.loop.name}) // ${base.loop.date}`,
    nowplaying: `${base.nowplaying.description} (${base.nowplaying.id} - ${base.nowplaying.name}) // ${base.nowplaying.date}`,
    pause: `${base.pause.description} (${base.pause.id} - ${base.pause.name}) // ${base.pause.date}`,
    play: `${base.play.description} (${base.play.id} - ${base.play.name}) // ${base.play.date}`,
    progress: `${base.progress.description} (${base.progress.id}- ${base.progress.name}) // ${base.progress.date}`,
    queue: `${base.queue.description} (${base.queue.id} - ${base.queue.name}) // ${base.queue.date}`,
    resume: `${base.resume.description} (${base.resume.id} - ${base.resume.name}) // ${base.resume.date}`,
    save: `${base.save.description} (${base.save.id} - ${base.save.name}) // ${base.save.date}`,
    search: `${base.search.description} (${base.search.id} - ${base.search.name}) // ${base.search.date}`,
    skip: `${base.skip.description} (${base.skip.id} - ${base.skip.name}) // ${base.skip.date}`,
    stop: `${base.stop.description} (${base.stop.id} - ${base.stop.name}) // ${base.stop.date}`,
    volume: `${base.volume.description} (${base.volume.id} - ${base.volume.name}) // ${base.volume.date}`,
}

};