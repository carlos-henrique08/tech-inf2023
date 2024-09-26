function removeUltimo(array) {
    array.pop();
    return array;
}

console.log(removeUltimo([1, 2, 3, 4, 5]));

console.log(removeUltimo(["a", "b", "c"]));

console.log(removeUltimo([10]));