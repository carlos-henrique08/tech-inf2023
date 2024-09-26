function somaPares(array) {
    return array.reduce((acumulador, valorAtual) => {
        if (valorAtual % 2 === 0) {
            return acumulador + valorAtual;
        }
        return acumulador;
    }, 0);
}

console.log(somaPares([1, 2, 3, 4, 5]));

console.log(somaPares([2, 4, 6, 8])); 

console.log(somaPares([1, 3, 5, 7]));