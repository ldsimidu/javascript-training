//Crie uma função que receba o nome de uma pessoa como argumento e 
// retorne uma saudação personalizada. Em seguida, chame a função e 
// exiba a saudação no console.
console.log("\nEXERCÍCIO 01")

//Arrow
const saudacaoAr = (nome) => {
    return `Saudações, ${nome}!`
}

//Function
function saudacaoFu(nome) {
    return `Saudações, ${nome}!`
}

console.log(saudacaoAr("Malena"), saudacaoFu("Caio"))

//Crie uma função que receba a idade de uma pessoa e retorne se ela 
// é maior de idade (idade >= 18). Imprima o resultado no console.
console.log("\nEXERCÍCIO 02")

function maiorIdade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

console.log(maiorIdade(19))

//Crie uma função que receba uma string e verifique se é um palíndromo 
// (uma palavra que é lida da mesma forma de trás para frente) 
// utilizando o método de string reverse(). Retorne true se for um 
// palíndromo e false caso contrário. Imprima o resultado no console.
console.log("\nEXERCÍCIO 03")

function viceVersa(texto) {
    textoInvertida = texto.split('').reverse().join('')
    if (textoInvertida == texto) {
        return `O texto é o mesmo invertido!`
    } else {
        return `O texto NÃO é o mesmo invertido`
    }
}

console.log(viceVersa("ama"))

//Crie uma função que receba três números como parâmetros e determine 
// qual é o maior entre eles. Utilize estruturas condicionais (if, else) 
// para comparar os valores e determinar o maior. Imprima o maior valor no console.
console.log("\nEXERCÍCIO 04")

function biggestNumber(num1, num2, num3) {
    let maior = num1;
    if (num2 > maior) {
      maior = num2;
  }

  if (num3 > maior) {
      maior = num3;
  }
    return maior;
}

console.log(biggestNumber(3, 2, 1))

//Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: 
// a base e o expoente. A função deve calcular a potência da base elevada ao 
// expoente e retornar o resultado.
console.log("\nEXERCÍCIO 05")

const divisao = (divisor, dividendo) => divisor / dividendo;

console.log(divisao(4, 2), divisao(2, 4))
