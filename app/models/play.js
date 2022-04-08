
module.exports.Log = function(mysqlConnection, bot, autor, title){
    mysqlConnection.query(`INSERT INTO LOG (CODIGO, BOT, NOME, AUTOR, DATE, TIME, DESCRICAO) VALUES ('9', '${bot}', 'Play', '${autor}', current_date(), current_time(), '${title}')`)
},

module.exports.Musica = function(mysqlConnection, codigo, bot, server, canal_de_voz, nome, canal, duracao, visualizacao, link){
   mysqlConnection.query(`INSERT INTO MUSICA (CODIGO, BOT, SERVIDOR, CANAL_DE_VOZ, NOME, CANAL, DURACAO, VISUALIZACAO, LINK, DATE, TIME) VALUES (${codigo}, '${bot}', '${server}', '${canal_de_voz}', '${nome}', '${canal}', '${duracao}', '${visualizacao}', '${link}', current_date(), current_time())`);
},

module.exports.undefinedLog = function(mysqlConnection, bot, autor, title){
    mysqlConnection.query(`INSERT INTO LOG (CODIGO, BOT, NOME, AUTOR, DATE, TIME, DESCRICAO) VALUES ('9', '${bot}', 'Ping', '${autor}', current_date(), current_time(), '${title}')`)
}