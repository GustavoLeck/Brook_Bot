module.exports = {

    validacaoConteudo(conteudo){
            conteudo = conteudo.replace(/'/g,""),
            conteudo = conteudo.replace(/💔/g,"")
            return conteudo
    }
}