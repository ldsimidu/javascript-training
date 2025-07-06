const pilotosF1 = ["Charles Leclerc", "Lian Lawson", "Lando Norris", "Lewis Hamilton", "Lando Norris", "Max Verstappen", "Lian Lawson"] 

//const pilotosAtualizados = new Set(pilotosF1)
//const listaNomesAutalizados = [...pilotosAtualizados]
const listaPilotosAutalizados = [...new Set(pilotosF1)]

console.log(listaPilotosAutalizados);
