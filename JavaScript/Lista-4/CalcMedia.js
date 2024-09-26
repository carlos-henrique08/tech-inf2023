function Media(array) {
    const soma = array.reduce((acumulador, Atual) => acumulador + Atual, 0);
    return soma / array.length;
}

console.log(Media([1, 2, 3, 4, 5]));

console.log(Media([10, 20, 30, 40, 50]));

console.log(Media([5, 5, 5, 5, 5]));