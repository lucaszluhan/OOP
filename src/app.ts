// exercicio 1
class Pessoa {
   nome: string;
   idade: number;
   private cpf: string;
   telefone: string;
   altura: number;
   peso: number;

   constructor(nome: string, idade: number, cpf: string, telefone: string, altura: number, peso: number) {
      this.nome = nome;
      this.idade = idade;
      this.cpf = cpf;
      this.telefone = telefone;
      this.altura = altura;
      this.peso = peso;
   }

   andar(): void {
      console.log('andando..');
   }

   falar(): void {
      console.log('bla bla bla');
   }

   recuperarCPF(): string {
      return this.cpf;
   }

   comer(): void {
      console.log('comendo..');
      this.peso++;
   }

   felizAniversario(): void {
      console.log('Parabens! :D');
      this.idade++;
   }
}

let lucas: Pessoa = new Pessoa('Lucas', 28, '12345678910', '10987654321', 173, 72);
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

abstract class Pessoa2 {
   nome: string;
   idade: number;
   telefone: string;

   constructor(nome: string, idade: number, telefone: string) {
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
   cargo: string;
   salario: number;

   constructor(nome: string, idade: number, telefone: string, cargo: string, salario: number) {
      super(nome, idade, telefone);
      this.cargo = cargo;
      this.salario = salario;
   }

   aumentarSalario(novoSalario: number): void {
      this.salario = novoSalario;
   }

   trocarDeCargo(novoCargo: string): void {
      this.cargo = novoCargo;
   }
}

let lucas2: Funcionario = new Funcionario('Lucas', 28, '10987654321', 'sonhador', 40000);
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
   nome: string;
   email: string;
   numeroCartao: string;

   constructor(nome: string, email: string, cartao: string) {
      this.nome = nome;
      this.email = email;
      this.numeroCartao = cartao;
   }
}

class Vendedor {
   nome: string;
   cnpj: string;
   contaCorrente: string;

   constructor(nome: string, cnpj: string, conta: string) {
      this.nome = nome;
      this.cnpj = cnpj;
      this.contaCorrente = conta;
   }
}

class Pagamento {
   cliente: Cliente;
   vendedor: Vendedor;
   private valor: number;
   private dataPagamento;

   constructor(cliente: Cliente, vendedor: Vendedor, valor: number) {
      this.cliente = cliente;
      this.vendedor = vendedor;
      this.valor = valor;
      this.dataPagamento = 'nao realizado';
   }

   fazerPagamento(data: string): void {
      this.dataPagamento = data;
   }

   atualizarValor(novoValor: number): void {
      this.valor = novoValor;
   }

   recuperarValor(): number {
      return this.valor;
   }
}

let cliente1: Cliente = new Cliente('Lucas', 'lalala@lalala.lalala', '12345678910');
let vendedor1: Vendedor = new Vendedor('Fabio', '10987654321', '123456-7');
let pagamento1: Pagamento = new Pagamento(cliente1, vendedor1, 500);

pagamento1.fazerPagamento('10/10/2021');
pagamento1.atualizarValor(890);
console.log(pagamento1.recuperarValor());

console.log('**********************************************');

// Exercicio 4

abstract class Ingresso {
   private valor: number;

   constructor() {
      this.valor = 100;
   }

   retornarValorFinal(): number {
      return this.valor;
   }
}

class VIP extends Ingresso {
   retornarValorFinal(): number {
      return super.retornarValorFinal() * 1.15;
   }
}
class Camarote extends Ingresso {
   retornarValorFinal(): number {
      return super.retornarValorFinal() * 1.3;
   }
}
class Pista extends Ingresso {
   retornarValorFinal(): number {
      return super.retornarValorFinal();
   }
}

let pista: Pista = new Pista();
let vip: VIP = new VIP();
let camarote: Camarote = new Camarote();

console.log(pista.retornarValorFinal());
console.log(vip.retornarValorFinal().toFixed(0));
console.log(camarote.retornarValorFinal());
