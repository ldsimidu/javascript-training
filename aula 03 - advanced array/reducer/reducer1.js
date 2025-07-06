const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// reduce recebe uma função callback e um valor inicial (aqui 0)
// A função callback recebe dois parâmetros:
// - acumulador: guarda o resultado acumulado até o momento
// - elementoAtual: o valor do elemento do array sendo processado
function calculeMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota ,0)
    
    const media = somaDasNotas / listaDeNotas.length
    return media
}

console.log(calculeMedia(salaJS)) //somaDasNotas = 7+8+8+7+10+6.5+4+10+7
console.log(calculeMedia(salaJava))
console.log(calculeMedia(salaPython))