/**
 * 
 * @param {Strings} CSV - Uma string contendo o conteúdo de um CSV.
 * @returns {lines} - Uma lista de strings, onde cada string representa uma linha do CSV.
 */
function csvTolines(CSV){
return CSV.split('\n'); 
}

/**
 * 
 * @param {Strings} Lines - Uma lista de strings, onde cada string representa uma linha do CSV.
 * @returns {row} - Uma lista de listas, onde cada lista interna contém as colunas de uma linha do CSV.
 */
function linesToColumns(Lines) {
let Columns = [];
for (let i = 0; i < Lines.length; i++)
{
Columns.push(Lines[i].split(';'));
}
return Columns;
}

/**
 * 
 * @param {Strings} Header - Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha
do CSV.
 * @returns r - Uma lista contendo apenas o cabeçalho (primeira linha).
 */
function  extractHeader (Header) {
return Header[0];
}

/**
 * 
 * @param {String} columns - Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha
do CSV.
 * @returns 
 */
function  extractContent(columns) {
    return columns.slice(1);
}


//5
function rowToJSON(Header, row) {
let obj = {};
for(let i=0; i < Header.length; i++) {
obj[Header[i]]= row[i];
}
return obj;
}

//6
function  columnsToJSON(header, content) {
return content.map(row =>{
return rowToJSON(header, row)
});

}
