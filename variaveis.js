const professor = "André"; //imutável
let aluno; //mutável

aluno = "Caio";

console.log(professor, aluno);

// Exemplo de If
if (1 > 0) {
    console.log(`Olá, meu nome é ${professor} e meu aluno se chama ${aluno}`)
    //variáveis 'var' possuem escopo global
    //variáveis 'let' possuem escopo por bloco
}

// Exemplo de função
function cumprimentar(nome) {
    console.log(`Olá ${nome}`)
}

cumprimentar("Helena")
