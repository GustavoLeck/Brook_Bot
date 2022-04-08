module.exports.Log = function(mysqlConnection, bot, autor, title){
    mysqlConnection.query(`INSERT INTO LOG (CODIGO, BOT, NOME, AUTOR, DATE, TIME, DESCRICAO) VALUES ('4', '${bot}', 'Clear', '${autor}', current_date(), current_time(), '${title}')`)
}
