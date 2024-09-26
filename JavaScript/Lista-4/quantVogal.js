function quantVogal(str) {
    const match = str.match(/[aeiouAEIOU]/g);
    
    return match ? match.length : 0;
}

console.log(quantVogal("hello"));

console.log(quantVogal("javascript"));

console.log(quantVogal("aeiou"));