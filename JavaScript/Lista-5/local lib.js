function compara(str1, str2) {
    JSON.stringify(str1) == JSON.stringify(str2)
}
function separaTexto(separador, testo){
    testo.split(separador);
}
module.exports = {compara, separaTexto};