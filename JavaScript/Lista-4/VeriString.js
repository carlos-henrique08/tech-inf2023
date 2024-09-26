function Num(string) {
    return /^\d+$/.test(string);
}


console.log(Num("12345"));

console.log(Num("abc123"));

console.log(Num("67890"));