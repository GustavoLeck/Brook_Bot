const model = require("../models/Log");
const bot = require("../../config/configBot");
const tempo = require("../validators/time")

module.exports.filter = function(usuario){

  var log= {
    Bot: bot.name,
    Nome: 'Filter',
    Autor: usuario,
    Date: tempo.data(),
    Hora: tempo.hora()
 };
  model.Log(log)
}
