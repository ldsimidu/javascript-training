const meuObjeto = { 
    a: 1, 
    b: 2, 
    c: 3 
};
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);
//Object.keys() e Object.values(): são usados para extrair 
// informações específicas de um objeto. Esses métodos fornecem, 
// respectivamente, as chaves e os valores presentes em um objeto. 
// São úteis para iterar ou fazer operações específicas em conjuntos 
// de dados de um objeto.


console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]
