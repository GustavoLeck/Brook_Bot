const mysql = require("../../config/connectionDB");
const model = require("../models/search");
const bot = require("../../config/configBot")

module.exports.search = function(usuario){

  var mysqlConnection = mysql.connection();

    model.Log(mysqlConnection, bot.name, usuario)
    console.log(`   =>Registro inserido na tabela LOG: Comando Search`)
}

