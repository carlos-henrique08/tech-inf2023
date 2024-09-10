function csvTolines(CSV){
return CSV.split('\n'); 
}

console.log(csvTolines("nome;idade\nJoão;28 \nMaria;32" ));