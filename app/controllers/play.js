const modelLog = require("../models/Log");
const modelMusic = require("../models/Music");
const validator = require("../validators/conteudo.js")
const bot = require("../../config/configBot")
const tempo = require("../validators/time")

module.exports.playMusic = function(discord, servidor){

  var server = validator.texto(servidor['guild']['name'])
  var title = validator.texto(discord['title'])
  var author = validator.texto(discord['author']);
  var canal = validator.texto(servidor['name'])
  var link = validator.texto(discord['url']);
  
  var Music= {
    Codigo: discord['id'],
    Bot: bot.name,
    Server: server,
    Canal_de_Voz: canal,
    Nome: title,
    Canal: author,
    Duracao: discord['duration'],
    Visualizacoes: discord['views'],
    Link: link,
    Data: tempo.data(),
    Hora: tempo.hora()
  }
  modelMusic.Music(Music)
},

module.exports.playLog = function(discord, usuario){

  var title = validator.texto(discord['title'])

  var log = {
    Bot: bot.name,
    Nome: 'Play',
    Autor: usuario,
    Date: tempo.data(),
    Hora: tempo.hora(),
    Descricao: title
 };

  modelLog.Log(log)
}

