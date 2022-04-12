module.exports.texto = function(conteudo){
        conteudo = conteudo.replace(/'/g,""),
        conteudo = conteudo.replace(/"/g,"")
    return conteudo;
}