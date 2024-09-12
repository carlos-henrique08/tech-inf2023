/**--FUNÇAO - 1--
 * - Essa função converte os dados em CSV onde cada objeto Representa uma linha.
 * @param {line} csvtext - Uma string contendo o conteúdo de um CSV.
 * @returns - Uma lista de strings, onde cada string representa uma linha do CSV.
 */
function csvTolines(csvtext){
return csvtext.split('\n'); 
}

/**--FUNÇAO - 2--
 * - Essa função separa os cabeçalho da linha dos dados.
 * @param {lines} Lines - Uma lista de strings, onde cada string representa uma linha do CSV.
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

/**--FUNÇAO - 3--
 * - Essa função extrai o cabeçalho e mostra.
 * @param {rows} Header - Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha
do CSV.
 * @returns r - Uma lista contendo apenas o cabeçalho (primeira linha).
 */
function  extractHeader (Header) {
return Header[0];
}

/**--FUNÇAO - 4--
 *  - Essa função extrai as informações e mostra somente os dados e não mostra o cabeçalho.
 * @param {content} columns - Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha
do CSV.
 * @returns 
 */
function  extractContent(columns) {
    return columns.slice(1);
}


/**--FUNÇAO - 5--
 *  - Essa função organizar as informações em seus respectivos parametro.
 * @param {cabeçalho} Header - Duas listas de mesmo tamanho: A primeira lista representa o cabeçalho da tabela.
 * @param {*} row - A segunda lista representa uma única linha do conteúdo da tabela. 
 * @returns - Um objeto JSON onde as chaves são os elementos do cabeçalho e os valores são os elementos
correspondentes da linha do conteúdo.
 */
function rowToJSON(Header, row) {
let obj = {};
for(let i=0; i < Header.length; i++) {
obj[Header[i]]= row[i];
}
return obj;
}

/**--FUNÇAO - 6--
 * 
 * @param {key} header - Uma lista de strings representando o cabeçalho
 * @param {value} content - uma lista de listas representando o conteúdo do CSV
 * @returns -  Uma lista de objetos JSON, onde as chaves são os elementos do cabeçalho e os valores são as
colunas correspondentes.
 */
function  columnsToJSON(header, content) {
return content.map(row =>{
return rowToJSON(header, row)
});

}
module.exports ={
csvTolines,
linesToColumns,
extractHeader,
extractContent,
columnsToJSON
};