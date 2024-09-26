function soma(numero) {
    return numero
      .toString().split('').map(Number).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(soma(123));

console.log(soma(456));

console.log(soma(789));