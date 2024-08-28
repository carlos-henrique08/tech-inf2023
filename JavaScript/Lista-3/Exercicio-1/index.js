function PN(Num){
	
 let resposta;

    if (Num > 0) {
        resposta = "Positivo";
    } else if (Num < 0) {
        resposta = "Negativo";
    } else {
        resposta = "Zero";
    }
      return resposta;
}
console.log(PN("5"));
console.log(PN("-3"));
console.log(PN("0"));
console.log(PN("1110"));
console.log(PN("-987654321"));
