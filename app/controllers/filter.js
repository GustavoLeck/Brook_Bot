const mysql = require("../../config/connectionDB");
const model = require("../models/filter");
const bot = require("../../config/configBot")

module.exports.filter = function(usuario){

  var mysqlConnection = mysql.connection();

    model.Log(mysqlConnection, bot.name, usuario)
    console.log(`   =>Registro inserido na tabela LOG: Comando Filter`)
}

