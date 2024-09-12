function linesToColumns(Lines) {
let Columns = [];
for (let i = 0; i < Lines.length; i++)
       {
        Columns.push(Lines[i].split(';'));
}
return Columns;
}

console.log(linesToColumns( ["nome;idade", "João;28", "Maria;32"]));
