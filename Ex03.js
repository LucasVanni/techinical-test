// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs');

const faturamentoMensal = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

const EX03 = () => {
  console.log('\nEx03');
  const valores = faturamentoMensal.filter(valor => valor > 0);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
  const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

  console.log(`Menor valor de faturamento: ${menorValor}`);
  console.log(`Maior valor de faturamento: ${maiorValor}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
};

module.exports = EX03;

