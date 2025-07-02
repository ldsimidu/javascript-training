//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
console.log("\nEXERCÍCIO 01")
const cores = ["vermelho", "laranja", "amarelo", "azul"]

for (let cor of cores) {
    console.log(cor)
}

//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
console.log("\nEXERCÍCIO 02")

function imprimirIndiceEElemento(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice ${i}: ${array[i]}`);
    }
}
imprimirIndiceEElemento(["banana", "maçã", "laranja"]);


//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
console.log("\nEXERCÍCIO 03")

function somarElementos(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}
console.log("Soma:", somarElementos([10, 5, 3, 2]));


//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior 
//valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
console.log("\nEXERCÍCIO 04")

function menorEMaior(array) {
    let menor = array[0];
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) menor = array[i];
        if (array[i] > maior) maior = array[i];
    }
    return `O menor número é ${menor} e o maior número é ${maior}`;
}
console.log(menorEMaior([15, 2, 30, 7, 10]));


//Crie um programa que utilize um laço for para percorrer uma array const numeros = 
// [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos 
// nesse array.
console.log("\nEXERCÍCIO 05")

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}


//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
console.log("\nEXERCÍCIO 06")

function calcularMedia(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    let media = soma / array.length;
    return media;
}
console.log("Média:", calcularMedia([10, 5, 7, 8, 6]));
