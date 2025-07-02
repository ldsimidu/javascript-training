const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

//slice
const sala1 = letras.slice(0, letras.length/2) //a -> d
const sala2 = letras.slice(letras.length/2)    //e -> i
console.log(sala1)
console.log(sala2)

//splice --- (início, quantos, itensAdicionais...)
//ex1
letras.splice(1, 2); //2 elementos deletados a partir do primeiro elemento
console.log(letras)

//ex2
animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)

//concatenar
const salaA = ["Gustavo", "Gabriel"]
const salaB = ["Daniel", "Eduardo"]

const salaUnificada = salaA.concat(salaB)
console.log(salaA)
console.log(salaB)
console.log(salaUnificada)

//array com 2 dimensões
const alunos = ["Gustavo", "Gabriel", "Daniel", "Eduardo"]
const medias = ["10", "9", "8", "7"]

const lista = [alunos, medias]

console.log(
    `O aluno na posição 0 da lista é ${lista[0][0]} e sua media é ${lista[1][0]}`
)
