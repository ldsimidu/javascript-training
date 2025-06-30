//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) 
// e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
console.log("\nEXERCÍCIO 01")

let my_string;
let my_num;
let my_boolean;

my_string = "Helena";
my_num = 8;
my_boolean = true;

console.log(typeof my_string)
console.log(typeof my_num)
console.log(typeof my_boolean)


// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
// Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta 
// variável usando template strings. Por fim, imprima os resultados obtidos no console.
console.log("\nEXERCÍCIO 02")

const nome = "Lucas";
const sobrenome = "Simidu"

const nome_completo = nome + "" + sobrenome

const meu_nome = `Olá, meu nome é ${nome} e sobrenome ${sobrenome}, então meu nome completo é ${nome_completo}`
console.log(meu_nome)

//Declare duas variáveis, uma contendo um número e outra contendo uma string. 
// Em seguida, combine-as em uma terceira variável usando template strings para montar uma 
// frase e exiba o resultado no console.
console.log("\nEXERCÍCIO 03")

const palavra = "Lucas";
const numero = 8;

const frase = `Sou o ${palavra} e meu número é ${numero}`
console.log(frase)

//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua 
// um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
console.log("\nEXERCÍCIO 04")

let exemplo = "Gato";
console.log(exemplo)

exemplo = "Malena"
console.log(exemplo)

//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra 
// dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando 
// console.log e analise os resultados. Faça o mesmo processo utilizando let e compare 
// com os resultados anteriores.
console.log("\nEXERCÍCIO 05")

var gato = "Cuti";

if (1 > 0) {
    var cachorro = "Ravena";
}

console.log(gato, cachorro)
// Como LET não possui um escopo global, resultará no erro de "variable not defined"

//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura 
// condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva 
// ou não dependendo do valor da variável.
console.log("\nEXERCÍCIO 06")

const chuva = true;

console.log("Preciso levar um guarda-chuva?")
if (chuva == true) {
    console.log("Sim, você deve levar um guarda-chuva, pois está CHOVENDO")
} else {
    console.log("Não precisa, pois NÃO ESTÁ CHOVENDO")
}
