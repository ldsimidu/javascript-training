// Crie uma variável contendo uma frase. Em seguida, exiba no console o 
// comprimento da frase e a mesma frase com letras maiúsculas.
console.log("\nEXERCÍCIO 01")

let frase_ex01 = "Faço Engenharia de Software";
console.log(frase_ex01.length);
console.log(frase_ex01.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que 
// não recebe atribuição (resultando em undefined). Exiba os valores no console.
console.log("\nEXERCÍCIO 02")

let valor_nulo = null;
let valor_indefinido;

console.log("Valor null:", valor_nulo);
console.log("Valor undefined:", valor_indefinido);

// Crie 3 variáveis de tipos diferentes, utilize template strings para 
// combinar os diferentes tipos de dados em uma única string e exiba o resultado no console.
console.log("\nEXERCÍCIO 03")

let idade = 18; // number
let nome_pessoa = "Helena"; // string
let tem_pet = true; // boolean

let combinacao = `Meu nome é ${nome_pessoa}, tenho ${idade} anos e é ${tem_pet} que tenho um pet.`;
console.log(combinacao);

// Crie uma variável numérica e uma string. Faça a conversão da variável 
// numérica para string e da string para número. Exiba os tipos de dados 
// resultantes no console.
console.log("\nEXERCÍCIO 04")

let numero_ex04 = 42;
let texto_ex04 = "123";

let numero_para_texto = String(numero_ex04);
let texto_para_numero = Number(texto_ex04);

console.log(typeof numero_para_texto); // string
console.log(typeof texto_para_numero); // number

// Crie uma variável com uma string e utilize métodos de manipulação de 
// strings, como toUpperCase, toLowerCase, slice ou outros. Exiba os 
// resultados finais no console.
console.log("\nEXERCÍCIO 05")

let frase_original = "Amo a saga The Witcher 3!";
console.log(frase_original.toUpperCase());
console.log(frase_original.toLowerCase());
console.log(frase_original.slice(0, 9));
