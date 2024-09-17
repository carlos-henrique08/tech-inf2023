function ConverterparaJson(data) {
    const obj = data.json;
    return obj;

}

function imprimirTabela(json) {
    console.log(json.card)
}


fetch ("https://deckofcardsapi.com/api/deck/dpizo53h8k8o/draw/?count=3")
.then(function(respostaApi){
const data=respostaApi.json()

return data;

}).then(function(jsonData){
    console.log(jsonData);
});
