const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "BobMarley#1981.,",
    database: "music_bot"
    })

module.exports.connection = function(){
    console.log(`Connection with DB require...`)
    return connection
} 