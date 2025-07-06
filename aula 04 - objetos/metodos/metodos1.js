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

const chavesObj = Object.keys(piloto)
console.log(chavesObj);
// 'nome',
// 'idade',
// 'equipe',
// 'nacionalidade',
// 'pistasDisputadas',
// 'grandesPremiosVencidos'

if (!chavesObj.includes('vitorias')) {
    console.error("Necessário ter vitórias cadastrada")
}