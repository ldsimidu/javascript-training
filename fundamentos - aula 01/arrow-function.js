const estudanteReprovou = (NotaFinal, Faltas) => {
    if (NotaFinal < 7 && Faltas > 4) {
        return true
    } else {
        return false
    }
}

const exibirNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(8, 2));

console.log(exibirNome("Helena"));
