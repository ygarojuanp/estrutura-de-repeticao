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