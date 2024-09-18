let Deck_id = "ngifly5ann4s";



function getJsonData(respostaAPI){
    const json = respostaAPI.json();
    return json;    

}

function atualizainfo(jsonData){
if(! jsonData.success)
throw new Error("Erro ao acessar dados da api");
const deck_id = jsonData.deck_id;
const remaining = jsonData.remaining;
const info1 = document.getElementById("deck_id");
const info2 = document.getElementById("remaining");  
info1.innerText = deck_id;
info2.innerText = remaining;

return jsonData;
}

function puxarCrtas(jsonData){
    const cards = jsonData.cards;
    
    for(let i=0; i<3; i++){
    const id = `carta${i+1}`;
    
    const card = document.getElementById(id);
    let img = card.querySelector('img')
    
    if(img == null){
    img = document.createElement('img');      
    }
    img.setAttribute('src', cards[i].image);
    card.append(img);
    
    }                
    
    return jsonData;
}

function Reembaralhar(){
fetch(`https://deckofcardsapi.com/api/deck/${Deck_id}/shuffle/?remaining=false`)
.then(getJsonData)
.then(function(jsonData){
    console.log = (jsonData);
    if(jsonData.success){
        alert("Baralho Reembaralhado")
    }      

})
}         

function olharCartas(){
fetch(`https://deckofcardsapi.com/api/deck/${Deck_id}/draw/?count=3`)
.then(getJsonData)
.then(atualizainfo)
.then(puxarCrtas)
   
}

function NVDeck(){
    fetch("https://deckofcardsapi.com/api/deck/ngifly5ann4s/shuffle/?cards=JS,JD,JC,JH,QS,QD,QC,QH,KS,KD,KC,KH,AS,AD,AC,AH,2S,2D,2C,2H,3S,3D,3C,3H,7D,4C,7H")
    .then (getJsonData)
    .then (atualizainfo)
    .then(function(jsonData){
        Deck_id = jsonData.Deck_id;
        return jsonData;
    })
}