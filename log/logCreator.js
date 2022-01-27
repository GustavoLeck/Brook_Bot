const db = require('../DB/connectionDB.js');

module.exports = {

    main(comando, author, description){
        this.logConsole(comando,  description);
        db.insertLog(comando.id, comando.name, author, description);
        },

    music(author, music){   
        db.insertMusic(author, music)
        },
        
    logConsole(comando, description){  
        console.log(`${comando.log}  {${comando.id} - ${comando.name}} // ${description}`)
    },  
  
}