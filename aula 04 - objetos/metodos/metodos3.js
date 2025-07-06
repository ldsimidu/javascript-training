const meuObjeto = { 
    a: 1, 
    b: 2, 
    c: 3 
};
const entradas = Object.entries(meuObjeto);
//Object.entries(): este método retorna um array de arrays 
// que representam pares chave-valor. É útil em situações 
// que demandam iterações mais complexas ou manipulação 
// mais minuciosa dos dados.

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]