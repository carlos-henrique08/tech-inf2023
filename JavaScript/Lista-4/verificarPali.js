function Palindromo(string) {
    let strInvertida = string.split('').reverse().join('');
    return string === strInvertida;
}

console.log(Palindromo("racecar")); 
console.log(Palindromo("hello")); 
console.log(Palindromo("madam"));