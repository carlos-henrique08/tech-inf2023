function  columnsToJSON(header, content) {
return content.map(row =>{
return rowToJSON(header, row)
});

}

console.log(columnsToJSON( ["nome", "idade"] , [["João", "28"], ["Maria", "32"]]
));