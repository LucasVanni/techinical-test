const readline = require('readline');

const EX01 = require("./Ex01");
const EX02 = require("./Ex02");
const EX03 = require("./Ex03");
const EX04 = require("./Ex04");
const EX05 = require("./Ex05");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

EX01();

console.log('\nEx02');
console.log('Digite um número para verificar se ele pertence à sequência de Fibonacci ou qual o menor número de Fibonacci maior que ele: ');

rl.on('line', (number) => {
  EX02(parseInt(number));
  rl.close();
});

rl.on('close', () => {
  EX03();
  EX04();

  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\nEx05');
  console.log('Digite uma string para ser invertida: ');

  rl2.on('line', (string) => {
    EX05(string);
    rl2.close();
  });
});
