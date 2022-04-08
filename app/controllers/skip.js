const mysql = require("../../config/connectionDB");
const model = require("../models/skip");
const bot = require("../../config/configBot")

module.exports.skip = function(usuario){

  var mysqlConnection = mysql.connection();

    model.Log(mysqlConnection, bot.name, usuario)
    console.log(`   =>Registro inserido na tabela LOG: Comando Skip`)
}

