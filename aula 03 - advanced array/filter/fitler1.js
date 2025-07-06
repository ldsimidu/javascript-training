const pilotosF1 = ["Charles Leclerc", "Lian Lawson", "Lando Norris", "Lewis Hamilton", "Max Verstappen"] 
const medias = [10, 8, 5, 9, 10]

//filter retorna um novo array com elementos que passam no teste.
const tamanhoNome = pilotosF1.filter((piloto, indice) => {
    return piloto.length < 13
})

const reprovados = pilotosF1.filter((_, indice) => {
    return medias[indice] < 7
})

console.log(tamanhoNome)
console.log(reprovados)