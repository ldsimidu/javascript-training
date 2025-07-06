function cumprimentar(nome) {
    console.log(`Olá ${nome.toUpperCase()}`)
}

cumprimentar("Helena")

// --------------------------------------- //

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

// --------------------------------------- //

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

// --------------------------------------- //

function dividir(dividendo, divisor) {
 return dividendo / divisor;
}

const resultado1 = dividir(10, 2);
const resultado2 = dividir(2, 10)
console.log(`o resultado 1 é ${resultado1} e o resultado 2 é ${resultado2}`);

// --------------------------------------- //

const estudanteReprovou = function(NotaFinal, Faltas) {
    if (NotaFinal < 7 && Faltas > 4) {
        return true
    } else {
        return false
    }
}

// como a função foi declarada em uma variável, não é possível puxar esses valores acima de onde foram definidos
console.log(estudanteReprovou(6, 5))
console.log(estudanteReprovou(8, 2))


function calculaProduto(a, b = 2, c = 1) {
  return a * b * c;
}

// --------------------------------------- //

const resultadoa = calculaProduto(3);
const resultadob = calculaProduto(2, 4);
const resultadoc = calculaProduto(1, 2, 3);
const resultadod = calculaProduto(2, undefined, 5);

console.log("Resultado 1:", resultadoa);
console.log("Resultado 2:", resultadob);
console.log("Resultado 3:", resultadoc);
console.log("Resultado 4:", resultadod);