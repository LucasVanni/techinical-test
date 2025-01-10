// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const EX02 = (number) => {
  const fibonacci = [0, 1];
  let found = false;

  while (true) {
    const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (next > number) break;
    fibonacci.push(next);
    if (next === number) {
      found = true;
      break;
    }
  }

  let output = '';
  for (let i = 0; i < fibonacci.length; i++) {
    output += fibonacci[i] + (i < fibonacci.length - 1 ? ', ' : '');
  }

  if (found) {
    console.log(`${output}...`);
  } else {
    console.log(`${output}... O número ${number} não existe na sequência de Fibonacci, o último número até ele é ${fibonacci[fibonacci.length - 1]}`);
  }
};

module.exports = EX02;
