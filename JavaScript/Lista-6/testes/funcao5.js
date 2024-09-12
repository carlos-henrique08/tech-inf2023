function rowToJSON(Header, row) {
 let obj = {};
for(let i=0; i < Header.length; i++) {
    obj[Header[i]]= row[i];
}
return obj;
}

console.log(rowToJSON(["nome", "idade"],["João", "28"]));
console.log(rowToJSON( ["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem",
    "Receita Bruta"],["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul",
    "258.8M"]));