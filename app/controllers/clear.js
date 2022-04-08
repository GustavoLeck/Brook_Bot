const mysql = require("../../config/connectionDB");
const model = require("../models/clear");
const bot = require("../../config/configBot")

module.exports.clear = function(usuario){

  var mysqlConnection = mysql.connection();

    model.Log(mysqlConnection, bot.name, usuario)
    console.log(`   =>Registro inserido na tabela LOG: Comando Clear`)
}

