function rowToJSON(Header, content){
const obj = {};
for (let i=0; i<Header.lenght; i++){
    let key = Header[i];
    let value = content[i];

    obj[key] = value;


}
return obj;
}

console.log(rowToJSON(["nome", "idade"],["João", "28"]));