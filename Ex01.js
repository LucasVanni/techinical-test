// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

const EX01 = () => {
    console.log('Ex01');
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
    }

  console.log(SOMA); // será o resultado 91
};

module.exports = EX01;
