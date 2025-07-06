let matriculaAtiva = true;

// condição ? valorSeVerdadeiro : valorSeFalso
function verificaMatriculaAtiva() {
    return matriculaAtiva ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva());

// --------------------------------- //

//
// operador ternário (? :)
//

// completo
let idadeEstudante = 16;
let precisaDeAutorizacao;

if (idadeEstudante < 18) {
 precisaDeAutorizacao = true;
} else {
 precisaDeAutorizacao = false;
}

console.log(precisaDeAutorizacao);

// --------------------------------- //

// simples
const autorizacao = idadeEstudante < 18 ? true : false;
console.log(autorizacao)