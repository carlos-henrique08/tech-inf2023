const csvtools = require('../lib/Funcoes');

function printCSV(csvtext , columns){
    const lines = csvtools.csvTolines(csvtext);
    const rows = csvtools.linesToColumns(lines);
    const Header = csvtools.extractHeader(rows);
    const content = csvtools.extractContent(rows);
    const json = csvtools.columnsToJSON(Header);

    console.table(json, columns);
} 

module.exports = (printCSV);
