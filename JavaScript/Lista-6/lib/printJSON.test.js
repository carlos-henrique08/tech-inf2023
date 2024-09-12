const{readfileSync} = require('fs');
const {printCSV} = require ('./printCSV');

const csvtext = readfileSync('../orcar.csv','utf-8');
const columns = ["filme" , "Diretor" , "Ano"];

printCSV(csvtext, columns);
