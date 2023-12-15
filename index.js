// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Verificando o tipo do herói e definindo o ataque correspondente
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
  
      // Exibindo a mensagem
      console.log(`O ${this.tipo} ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe
  const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
  const heroi2 = new Heroi('Gandalf', 100, 'mago');
  
  heroi1.atacar(); // Saída: O guerreiro usou espada
  heroi2.atacar(); // Saída: O mago usou magia
  