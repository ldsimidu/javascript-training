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

function exibirPistas(pista1, pista2) {
    console.log(`A pista 1 é ${pista1}`);
    console.log(`A pista 2 é ${pista2}`);
}

exibirPistas(...piloto.pistasDisputadas)

const dadosPremios = {
    vencedor: piloto.nome,
    ...piloto.grandesPremiosVencidos[0]
}

console.log(dadosPremios);

// vencedor: 'Charles Leclerc',
// nomeGP: 'GP da Bélgica',
// pais: 'Bélgica',
// circuito: 'Spa-Francorchamps',
// pole: 'p1',
// ano: 2019
