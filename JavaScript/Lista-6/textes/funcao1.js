function csvTolines(CSV){
return CSV.split('\n'); 
}

console.log(csvTolines("nome;idade\nJoão;28 \nMaria;32" ));
console.log(csvTolines("Filme;Diretor;Ano;Duração;Gênero;País de Origem;ReceitaBruta\nParasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M\nGreen Book;PeterFarrelly;2018;130;Drama;EUA;321.8M"));