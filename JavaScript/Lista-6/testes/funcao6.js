function  columnsToJSON(header, content) {
return content.map(row =>{
return rowToJSON(header, row)
});

}

console.log(columnsToJSON( ["nome", "idade"] , [["João", "28"], ["Maria", "32"]]
));


function rowToJSON(Header, row) {
    let obj = {};
   for(let i=0; i < Header.length; i++) {
       obj[Header[i]]= row[i];
   }
   return obj;
   }