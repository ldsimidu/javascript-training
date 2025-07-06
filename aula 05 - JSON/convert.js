const estudante = require('./estudante.json')

//conversão de JSON para string
const string = JSON.stringify(estudante)
console.log(typeof string, string);

//conversão de string para JSON
const objeto = JSON.parse(string)
console.log(objeto);
