const piloto = {
    nome: 'Charles Leclerc',
    idade: '27',
    equipe: 'scuderia ferrari',
    nacionalidade: 'Monaco',
    grandesPremios: ["Monaco", "Ímola"],
    vitorias: 4,
    //qualificado: (mediaBase) => this.vitorias >= mediaBase ? `qualificado` : `desqualificado` //AERO FUNCTION QUEBRA COM THIS
    qualificado: function(mediaBase) {
        return this.vitorias >= mediaBase ? `qualificado` : `desqualificado`
    }
}

//Criação de método
console.log(piloto.qualificado(3));
