const alunos = ["Gustavo", "Gabriel", "Daniel", "Eduardo"]
const medias = ["10", "9", "8", "7"]

const lista = [alunos, medias]

function exibirNomeNota(aluno) {
    if (lista[0].includes(aluno)) { //true ou false de se existe na lista
        const indice = lista[0].indexOf(aluno);
        const nota = lista[1][indice]
        console.log(
            `A nota do ${aluno} é de ${nota}`
        )
    } else {
        console.log(`${aluno} não encontrado`)
    }
}

exibirNomeNota("Gustavo")


//desestruturação
function exibirNomeNotaB(aluno) {
    if (lista[0].includes(aluno)) {

        const [alunos, medias] = lista;

        const indice = alunos.indexOf(aluno);
        const nota = medias[indice]
        console.log(
            `A nota do ${aluno} é de ${nota}`
        )
    } else {
        console.log(`${aluno} não encontrado`)
    }
}

exibirNomeNotaB("Eduardo")


//incrementação
let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);


//classico for

//primeira expressão: executada apenas uma vez
//segunda expressão: condição de execução
//terceira expressão: executada sempre ao final do bloco
const notas = [10, 9, 8, 7, 6, 5]

for (let indice = 0; indice < notas.length; indice++) { //Repete enquanto o índice for menor que o tamanho da lista de notas
    console.log(indice, notas[indice])
}

let somaNotas = 0

for (let indice = 0; indice < notas.length; indice++) {
    somaNotas = somaNotas + notas[indice]
}

console.log(somaNotas)

//for-of
//const notas = [10, 9, 8, 7, 6, 5]
let somaNotasA = 0

for (let nota of notas) { //para cada nota em notas
    somaNotasA = somaNotasA + nota
}

console.log(somaNotasA)


//forEach

//executa uma função PARA CADA item dentro do array

//const notas = [10, 9, 8, 7, 6, 5]
let somaDasNotasB = 0;

notas.forEach(function (nota) {
    somaDasNotasB += nota;
})

const media = somaDasNotasB / notas.length;
console.log(`A média das notas é ${media}`)
