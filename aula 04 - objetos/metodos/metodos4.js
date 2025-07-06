const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);
//Object.assign(): usado para fusão e cópia de objetos. Este método 
// permite combinar propriedades de diferentes objetos em um único objeto.

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }