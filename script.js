function somaImpares() {
    let soma = 0;
    for (let i = 1; i <= 500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            soma += i;
        }
    }
    alert("A soma dos impares e multiplos de 3 no conjunto de 1 á 500 é: " + soma)
}
function menorEMaiorAltura() {
    const quantidadeAlturas = 15;
    let alturas = [1.75, 1.65, 1.80, 1.76, 1.85, 1.55, 1.87, 1.72, 1.82, 1.69, 1.71, 1.75, 1.76, 1.57, 1.90];


    let menor = alturas[0];
    let maior = alturas[0];

    for (let altura of alturas) {
        if (altura < menor) {
            menor = altura;
        }
        if (altura > maior) {
            maior = altura;
        }
    }
    alert(`A quantidade alturas percorridas é: ${quantidadeAlturas}
        A maior altura é: ${maior} &
        A menor altura: ${menor}!`);

}

function mediaAritmetica() {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidadeValores = 0;
    let valor = 10;


    while (valor > -8) {
        soma += valor;
        quantidadeValores++

        if (valor > 0) {
            positivos++
        } else {
            negativos++
        }
        valor -= 1;
    }
    const media = soma / quantidadeValores;
    const percentualPositivo = (positivos * 100) / quantidadeValores;
    const percentualnegativo = negativos / quantidadeValores * 100;
    alert(`
        quantidade: ${quantidadeValores}
        positivos: ${positivos}
        negativos: ${negativos}
        soma: ${soma}
        percentual positivo: ${percentualPositivo.toFixed(2)} %
        percentual negativo: ${percentualnegativo.toFixed(2)} %
        `);
}

function algoritmoEstruturado() {
    let valores = {
        primeiro: 3,
        segundo: 5,
        terceiro: 9,
        quarto: 6,
        quinto: 10,
        encerramento: 0
    }
    let pares = 0;
    let impares = 0;
    let somaPares = 0;
    let somaImpares = 0;
    let quantidade = 0;
    let soma = 0;

    for (chave in valores) {
        const valor = valores[chave];
        console.log(`chave do objeto ${valor}`);

        if (valor === 0) {
            break;
        }

        quantidade++
        soma += valor

        if (valor % 2 == 0) {
            pares++
        } else {
            impares++
        }
        let mediaPares = somaPares / pares;
        let mediaGeral = soma / quantidade;

        console.log(` Quantidade de pares: ${pares}`);
        console.log(` Quantidade de impares: ${impares}`);
        console.log(` Media dos pares: ${mediaPares}`);
        console.log(` Media geral: ${mediaGeral}`);

    }
}