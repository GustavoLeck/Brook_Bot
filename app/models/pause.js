module.exports.Log = function(mysqlConnection, bot, autor, title){
    mysqlConnection.query(`INSERT INTO LOG (CODIGO, BOT, NOME, AUTOR, DATE, TIME, DESCRICAO) VALUES ('8', '${bot}', 'Pause', '${autor}', current_date(), current_time(), '${title}')`)
}
