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
    console.log(`Olá ${nome.toUpperCase()}`)
}

cumprimentar("Helena")

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5'); //parseInt = transforma para inteiro

function media(nota1, nota2, nota3, nota4) {
    const total = (nota1 + nota2 + nota3 + nota4)/4
    console.log(`A média total é de ${total.toFixed(2)}`)

    if (total < 6) {
        console.log("Não passou de ano")
    } else {
        console.log("Passou de ano")
    }
}

media(notaPrimeiroBi, notaSegundoBi, notaTerceiroBi, notaQuartoBi)

const mediaFinal = 8;
const faltasFinais = 5;
const advertenciasFinais = 0;

function passouDeAno(notaFinal, Faltas, Advertencias) {
    // || = ou
    // && = e
    if (notaFinal < 7 || Faltas > 4) {
        console.log("Esta de DP")
    } else {
        console.log("Passou!!")
    }

    if (Faltas >= 2 && !Advertencias) {
        console.log("Recebeu bonus")
    } else {
        console.log("Não recebeu bonus")
    }
}

passouDeAno(mediaFinal, faltasFinais)

const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}
