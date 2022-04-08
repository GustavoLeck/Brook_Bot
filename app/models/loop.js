module.exports.Log = function(mysqlConnection, bot, autor, title){
    mysqlConnection.query(`INSERT INTO LOG (CODIGO, BOT, NOME, AUTOR, DATE, TIME, DESCRICAO) VALUES ('6', '${bot}', 'Loop', '${autor}', current_date(), current_time(), '${title}')`)
}
module.exports.Log = function(mysqlConnection, bot, autor, title){
    mysqlConnection.query(`INSERT INTO LOG (CODIGO, BOT, NOME, AUTOR, DATE, TIME, DESCRICAO) VALUES ('6', '${bot}', 'Loop', '${autor}', current_date(), current_time(), '${title}')`)
}
