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