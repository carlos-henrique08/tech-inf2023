function  extractContent(columns) {
    return columns.slice(1);
}

console.log(extractContent( [["nome", "idade"], ["João", "28"], ["Maria", "32"]]));