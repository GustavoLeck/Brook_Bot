const mysql = require("../../config/connectionDB");
const model = require("../models/play");
const validator = require("../validators/conteudo.js")
const bot = require("../../config/configBot")
const usuario = require("../../commands/music/play")

module.exports.playMusic = function(discord, servidor){

  var mysqlConnection = mysql.connection();

  var title = validator.texto(discord['title']);
  var author = validator.texto(discord['author']);
  var link = validator.texto(discord['url']);
  var server = validator.texto(servidor['guild']['name'])
  var canal = validator.texto(servidor['name'])
 if(discord == undefined){
    model.undefinedLog(bot)
    console.log("Valores indefinidos...")
   }else{
    model.Musica(mysqlConnection, discord['id'], bot.name, server, canal, title, author, discord['duration'], discord['views'], link)
    console.log(`   =>Registro inserido na tabela MUSICA: ${title}`)
  }
},

module.exports.playLog = function(discord, usuario){
  var mysqlConnection = mysql.connection();
  var title = validator.texto(discord['title']);

  if(discord == undefined){
    model.undefinedLog(bot)
    console.log("Valores indefinidos...")
   }else{
    model.Log(mysqlConnection, bot.name, usuario, title)
    console.log(`   =>Registro inserido na tabela LOG: Comando Play`)
  }

}
