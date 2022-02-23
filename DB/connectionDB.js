const { FORMERR } = require('dns');
const mysql = require('mysql');
const db = require("../configuracao/configBD.js")
const date = require("../log/logDate")
const validacao = require("../validacao/conteudo.js")
var mysqlConnection = mysql.createConnection({
    host: db.login.host,
    user: db.login.user,
    password: db.login.password,
    database: db.login.database
})

mysqlConnection.connect ((err)=>{
    if(!err)
    console.log('DB conectado.')
    else 
    console.log('Não foi possivel conectar com o DB.')
})

module.exports = {

    insertLog(id, name, author,description){
    mysqlConnection.query(`INSERT INTO LOG (CODIGO,  BOT,  NOME, AUTOR, DATE, TIME, DESCRICAO) VALUES ('${id}', '${date.bot.name}', '${name}', '${author}', current_date(), current_time(), '${validacao.validacaoConteudo(description)}');`)   
    console.log(`Registro inserido na tabela - LOG`)},

insertMusic(author, music){
    mysqlConnection.query(`INSERT INTO MUSICA (CODIGO,  BOT, NOME, CANAL, CANAL_DE_VOZ, DURACAO, VISUALIZACAO, LINK, DATE, TIME) VALUES ('${music['id']}', '${date.bot.name}', '${validacao.validacaoConteudo(music['title'])}', '${validacao.validacaoConteudo(music['author'])}', '${validacao.validacaoConteudo(author)}', '${music['duration']}', '${music['views']}', '${music['url']}', current_date(), current_time());`)   
    console.log(`Registro inserido na tabela - MUSICA: "${music['title']}"`)},
    
insertIndefinido(){
    mysqlConnection.query(`INSERT INTO MUSICA (CODIGO, BOT, NOME, CANAL, CANAL_DE_VOZ, DURACAO, VISUALIZACAO, LINK, DATE, TIME) VALUES ('Indefinido', '${date.bot.name}', 'Indefinido', 'Indefinido', 'Indefinido', 'Indefinido', 'Indefinido', 'Indefinido', current_date(), current_time());`)   
    console.log(`Registro inserido na tabela - MUSICA (Valores não disponiveis).`)}
}

    


