const model = require("../models/Log");
const bot = require("../../config/configBot");
const time = require("../validators/time")

module.exports.ping = function(usuario){

  var log = {
    Bot: bot.name,
    Nome: 'Ping',
    Autor: usuario,
    Date: time.data(),
    Hora: time.hora()
 };
  model.Log(log)
}
