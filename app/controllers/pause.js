const mysql = require("../../config/connectionDB");
const model = require("../models/pause");
const bot = require("../../config/configBot")

module.exports.pause = function(usuario){

  var mysqlConnection = mysql.connection();

    model.Log(mysqlConnection, bot.name, usuario)
    console.log(`   =>Registro inserido na tabela LOG: Comando Pause`)
}

