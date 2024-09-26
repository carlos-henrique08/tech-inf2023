function removeEspacos(frase) {
    return frase.replace(/\s+/g, '');
}

console.log(removeEspacos("hello world"));

console.log(removeEspacos(" a b c "));

console.log(removeEspacos(" "));