const mysql = require("../../config/connectionDB");
const model = require("../models/progress");
const bot = require("../../config/configBot")

module.exports.progress = function(usuario){

  var mysqlConnection = mysql.connection();

    model.Log(mysqlConnection, bot.name, usuario)
    console.log(`   =>Registro inserido na tabela LOG: Comando Progress`)
}

