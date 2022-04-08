const mysql = require("../../config/connectionDB");
const model = require("../models/ping");
const bot = require("../../config/configBot")

module.exports.ping = function(usuario){

  var mysqlConnection = mysql.connection();

    model.Log(mysqlConnection, bot.name, usuario)
    console.log(`   =>Registro inserido na tabela LOG: Comando Ping`)
}

