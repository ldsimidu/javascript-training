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

for (let chave in piloto) {
    console.log(chave);
    // nome
    // idade
    // equipe
    // nacionalidade
    // pistasDisputadas
    // grandesPremiosVencidos
}


for (let chave in piloto) {
    const tipo = typeof piloto[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} possui o valor ${piloto[chave]}`);
        // A chave nome possui o valor Charles Leclerc
        // A chave idade possui o valor 27
        // A chave equipe possui o valor scuderia ferrari
        // A chave nacionalidade possui o valor Monaco
    }
}
