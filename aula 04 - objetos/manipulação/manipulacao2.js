const piloto = {
    nome: 'Charles Leclerc',
    idade: '27',
    equipe: 'scuderia ferrari',
    nacionalidade: 'Monaco',
    pistasDisputadas: ["Monaco", "Ímola"],
    grandesPremiosVencidos: [
        {
            nomeGP: "GP da Bélgica",
            pais: "Bélgica",
            circuito: "Spa-Francorchamps",
            pole: "p1",
            ano: 2019
        },
        {
            nomeGP: "GP da Itália",
            pais: "Itália",
            circuito: "Monza",
            pole: "p1",
            ano: 2019
        }
    ]
}

console.log(piloto.grandesPremiosVencidos);
console.log(piloto.grandesPremiosVencidos[0]);
piloto.grandesPremiosVencidos.push({
    nomeGP: "GP da Áustria",
    pais: "Áustria",
    circuito: "Red Bull Ring",
    pole: "",
    ano: 2022
})

console.log("------- novo gp -------");
console.log(piloto.grandesPremiosVencidos);


console.log("------- apenas GPs com POLE -------");
const listaGrandesPremiosVencidos = piloto.grandesPremiosVencidos.filter((gpv) => gpv.pole)
console.log(listaGrandesPremiosVencidos);
