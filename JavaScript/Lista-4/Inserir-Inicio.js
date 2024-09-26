function inserirInicio(array, elemento) {
    array.unshift(elemento);
    return array;
}

console.log(inserirInicio([1, 2, 3, 4, 5], 6));

console.log(inserirInicio(["a", "b", "c"], "d"));

console.log(inserirInicio([10], 20));