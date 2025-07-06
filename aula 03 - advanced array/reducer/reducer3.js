const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log("A soma dos números é:", soma);

//O método reduce é usado para iterar sobre os elementos do 
//array numeros e acumular a soma dos valores desses números 
//no parâmetro acumulador. No final, a variável soma contém 
//a soma total dos números.