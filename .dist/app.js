"use strict";
// exercicio 1
class Pessoa {
    constructor(nome, idade, cpf, telefone, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.telefone = telefone;
        this.altura = altura;
        this.peso = peso;
    }
    andar() {
        console.log('andando..');
    }
    falar() {
        console.log('bla bla bla');
    }
    recuperarCPF() {
        return this.cpf;
    }
    comer() {
        console.log('comendo..');
        this.peso++;
    }
    felizAniversario() {
        console.log('Parabens! :D');
        this.idade++;
    }
}
let lucas = new Pessoa('Lucas', 28, '12345678910', '10987654321', 173, 72);
lucas.andar();
lucas.falar();
console.log(lucas.peso);
lucas.comer();
console.log(lucas.peso);
console.log(lucas.idade);
lucas.felizAniversario();
console.log(lucas.idade);
console.log('**********************************************');
// exercicio 2
class Pessoa2 {
    constructor(nome, idade, telefone) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
    }
    andar() {
        console.log('andando...');
    }
    falar() {
        console.log('bla bla bla');
    }
}
class Funcionario extends Pessoa2 {
    constructor(nome, idade, telefone, cargo, salario) {
        super(nome, idade, telefone);
        this.cargo = cargo;
        this.salario = salario;
    }
    aumentarSalario(novoSalario) {
        this.salario = novoSalario;
    }
    trocarDeCargo(novoCargo) {
        this.cargo = novoCargo;
    }
}
let lucas2 = new Funcionario('Lucas', 28, '10987654321', 'sonhador', 40000);
lucas2.andar();
lucas2.falar();
console.log(lucas2.cargo);
console.log(lucas2.salario);
lucas2.trocarDeCargo('realista');
lucas2.aumentarSalario(4000);
console.log(lucas2.cargo);
console.log(lucas2.salario);
console.log('**********************************************');
// exercicio 3
class Cliente {
    constructor(nome, email, cartao) {
        this.nome = nome;
        this.email = email;
        this.numeroCartao = cartao;
    }
}
class Vendedor {
    constructor(nome, cnpj, conta) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.contaCorrente = conta;
    }
}
class Pagamento {
    constructor(cliente, vendedor, valor) {
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.valor = valor;
        this.dataPagamento = 'nao realizado';
    }
    fazerPagamento(data) {
        this.dataPagamento = data;
    }
    atualizarValor(novoValor) {
        this.valor = novoValor;
    }
    recuperarValor() {
        return this.valor;
    }
}
let cliente1 = new Cliente('Lucas', 'lalala@lalala.lalala', '12345678910');
let vendedor1 = new Vendedor('Fabio', '10987654321', '123456-7');
let pagamento1 = new Pagamento(cliente1, vendedor1, 500);
pagamento1.fazerPagamento('10/10/2021');
pagamento1.atualizarValor(890);
console.log(pagamento1.recuperarValor());
console.log('**********************************************');
// Exercicio 4
class Ingresso {
    constructor() {
        this.valor = 100;
    }
    retornarValorFinal() {
        return this.valor;
    }
}
class VIP extends Ingresso {
    retornarValorFinal() {
        return super.retornarValorFinal() * 1.15;
    }
}
class Camarote extends Ingresso {
    retornarValorFinal() {
        return super.retornarValorFinal() * 1.3;
    }
}
class Pista extends Ingresso {
    retornarValorFinal() {
        return super.retornarValorFinal();
    }
}
let pista = new Pista();
let vip = new VIP();
let camarote = new Camarote();
console.log(pista.retornarValorFinal());
console.log(vip.retornarValorFinal().toFixed(0));
console.log(camarote.retornarValorFinal());
