const notas = [7, 8.5, 9.5, 10]

//remove um valor do array
notas.pop()

//adiciona um valor ao array
notas.push(7)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media)
console.log(notas)
