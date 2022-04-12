const model = require("../models/Log");
const bot = require("../../config/configBot");
const tempo = require("../validators/time")

module.exports.clear = function(usuario){

  var log= {
    Bot: bot.name,
    Nome: 'Clear',
    Autor: usuario,
    Date: tempo.data(),
    Hora: tempo.hora()
 };
  model.Log(log)
}
