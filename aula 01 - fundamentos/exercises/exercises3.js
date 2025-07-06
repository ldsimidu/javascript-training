// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária,
// depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao.
console.log("\nEXERCÍCIO 01")

let saldo = 1000;
let deposito = 500;
let saque = 200;
let operacao = saldo + deposito - saque;

console.log("Saldo inicial:", saldo);
console.log("Depósito:", deposito);
console.log("Saque:", saque);
console.log("Saldo final:", operacao);

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar.
console.log("\nEXERCÍCIO 02")

let numero_ex02 = 7;
let resultado_par_ou_impar = (numero_ex02 % 2 === 0) ? "Par" : "Ímpar";
console.log(`O número ${numero_ex02} é ${resultado_par_ou_impar}`);

// Verifique se o usuário está logado E é administrador usando o operador AND (&&)
console.log("\nEXERCÍCIO 03")

let estaLogado = true;
let eAdministrador = true;

if (estaLogado && eAdministrador) {
    console.log("Acesso permitido: usuário logado e administrador.");
} else {
    console.log("Acesso negado: permissões insuficientes.");
}

// Use o operador OR (||) para verificar se pelo menos uma das condições é verdadeira
console.log("\nEXERCÍCIO 04")

let temCartao = false;
let temDinheiro = true;

if (temCartao || temDinheiro) {
    console.log("Compra autorizada: pelo menos uma forma de pagamento disponível.");
} else {
    console.log("Compra negada: nenhuma forma de pagamento disponível.");
}

// Verifique se a idade do usuário permite a compra de um ingresso usando if/else
console.log("\nEXERCÍCIO 05")

let idade_minima = 18;
let idade_usuario = 16;

if (idade_usuario >= idade_minima) {
    console.log("Compra autorizada: usuário tem idade suficiente.");
} else {
    console.log("Compra negada: idade insuficiente para comprar o ingresso.");
}
