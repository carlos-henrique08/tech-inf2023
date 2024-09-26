function inserirFinal(array, elemento) {
    array.push(elemento);
    return array;
}


console.log(inserirFinal([1, 2, 3, 4, 5], 6));

console.log(inserirFinal(["a", "b", "c"], "d"));

console.log(inserirFinal([10], 20));