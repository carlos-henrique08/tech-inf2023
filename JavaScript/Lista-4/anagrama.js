function Anagrama(str1, str2) {
    const normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}


console.log(Anagrama("listen", "silent"));

console.log(Anagrama("hello", "world")); 

console.log(Anagrama("evil", "vile")); 