const estudante = 'Fernando';
const estaAprovado = true;

if (estaAprovado === true) {
    console.log('parabéns, boas festas');
} else {
    console.log('REPROVADO, boas festas');
}

if (estudante === 'Fernando') {
    console.log(`olá, ${estudante}`);
} else {
    console.log('quem é vc');
}

// === - compara tudo, valor e tipo
// == - compara valor
if ('0' == 0) {
    console.log("Passou na comparação")
} else {
    console.log("Não passou na comparação")
}

let matriculaAtiva = true;

// condição ? valorSeVerdadeiro : valorSeFalso
function verificaMatriculaAtiva() {
    return matriculaAtiva ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva());

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

// simples
const autorizacao = idadeEstudante < 18 ? true : false;
console.log(autorizacao)