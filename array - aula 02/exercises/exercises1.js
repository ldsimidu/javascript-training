// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. 
// Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). 
// Imprima no console o array e também a informação de comprimento do array.
console.log("\nEXERCÍCIO 01")

let arrayEsparso = []
arrayEsparso[1] = "valor no índice 1"
arrayEsparso[3] = "valor no índice 3"
arrayEsparso[7] = "valor no índice 7"

console.log(arrayEsparso)
console.log("Comprimento do array:", arrayEsparso.length)

// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor 
// para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
console.log("\nEXERCÍCIO 02")

let arrayInicial = [10, 20, 30, 40, 50]
console.log("Antes:", arrayInicial)

arrayInicial[0] = 99
console.log("Depois:", arrayInicial)

// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha 
// utilizando o método push(). Imprima no console os itens presentes no array para 
// verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento 
// do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado 
// para verificar a mudança.
console.log("\nEXERCÍCIO 03")

let meuArray = []
meuArray.push(3)
meuArray.push(7)
meuArray.push(10)

console.log("Array original:", meuArray)

meuArray[0] = meuArray[0] * 2
console.log("Array atualizado:", meuArray)

// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele 
// utilizando o método push(). Adicione três números inteiros ao array e, em seguida, 
// exiba o array resultante.
console.log("\nEXERCÍCIO 04")

let numeros = []
numeros.push(5)
numeros.push(15)
numeros.push(25)

console.log("Array de números:", numeros)

// Desenvolva um programa em Node.js que simule uma clínica veterinária. 
// Crie um array vazio chamado clinica que representará a fila de animais na clínica. 
// Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista 
// de animais no console. Após a exibição, remova os animais da lista um por vez e, 
// por fim, exiba no console o estado final da lista.
console.log("\nEXERCÍCIO 10 - Clínica Veterinária")

let clinica = []

clinica.push("Cachorro")
clinica.push("Gato")
clinica.push("Papagaio")

console.log("Fila de animais:", clinica)

clinica.pop()
clinica.pop()
clinica.pop()

console.log("Fila final após atendimentos:", clinica)
