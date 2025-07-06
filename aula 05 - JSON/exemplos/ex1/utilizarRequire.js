const dados = require('./dados.json')

console.log("Conteúdo completo");
console.log(dados);

console.log("\nLista de Produtos:");
console.log(dados.produtos);

console.log("\nPrimeiro Produto:");
console.log(dados.produtos[0]);

console.log("\nNome do segundo usuário:");
console.log(dados.usuarios[1].nome);

console.log("\nEmail do João:");
const joao = dados.usuarios.find(usuario => usuario.nome === "João");
console.log(joao.email);