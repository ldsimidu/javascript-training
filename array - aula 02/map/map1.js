const notas = [10, 9, 8, 6]

// Cria um novo array com as notas aumentadas em 1 ponto,
// mas sem ultrapassar o valor máximo de 10.
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1)

console.log(notasAtualizadas)

//Enquanto o método forEach não retorna nenhum tipo de dados, o método map() 
// sempre retorna um array. Caso a função callback não tenha nenhum dado de 
// retorno, ainda assim o resultado de map() será um array vazio. Por isso 
// qualquer tentativa de retornar resultados de forEach e armazená-los em 
// variáveis vai resultar em undefined.