const piloto = {
    nome: 'Charles Leclerc',
    idade: '27',
    equipe: 'scuderia ferrari',
    nacionalidade: 'Monaco'
}

function exibeInfoPiloto(objPiloto, infoPiloto) {
    return objPiloto[infoPiloto]
}

console.log(exibeInfoPiloto(piloto, "1"));
console.log(exibeInfoPiloto(piloto, "equipe"));
console.log(piloto);

//adicionando/alterando uma nova propriedade
piloto.numeroCarro = "16"
piloto.nome = "Charles Marc Hervé Perceval Leclerc"
console.log(piloto);
