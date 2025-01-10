// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs');
const xml2js = require('xml2js');

const calcularFaturamento = (dados) => {
  const valores = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
  const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
};

const processarDadosJson = (caminho) => {
  const dadosJson = JSON.parse(fs.readFileSync(caminho, 'utf8'));
  return calcularFaturamento(dadosJson);
};
const processarDadosXml = (caminho) => {
  const dadosXml = fs.readFileSync(caminho, 'utf8');
  return new Promise((resolve, reject) => {
    xml2js.parseString(dadosXml, (err, result) => {
      if (err) return reject(err);

      const rows = result.root.row;

      if(!Array.isArray(rows)) {
        return reject(new Error('Formato inválido para os dados XML'));
      }

      const dadosXmlFormatados = rows.map(dia => ({
        dia: parseInt(dia.dia[0]),
        valor: parseFloat(dia.valor[0])
      }));

      resolve(calcularFaturamento(dadosXmlFormatados));
    });
  });
};

const EX03 = async () => {
  console.log('\nEx03');
  const resultadoJson = processarDadosJson('dados.json');
  console.log('Resultados com dados.json:', resultadoJson);

  try {
    const resultadoXml = await processarDadosXml('dados.xml');
    console.log('Resultados com dados.xml:', resultadoXml);
  } catch (error) {
    console.error('Erro ao processar dados.xml:', error);
  }
};

module.exports = EX03;
