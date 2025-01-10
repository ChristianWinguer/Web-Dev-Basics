const PESO = document.getElementById("peso");
const ALTURA = document.getElementById("altura");
const BOTAO = document.getElementById("botao");
const RESPOSTA = document.getElementById('resposta');

function calculaImc(peso, altura) {
    return peso / (altura * altura);
}

function classificaImc(imc) {
    if (imc < 18.5) {
        imcClass = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        imcClass = "Peso adequado"
    } else if (imc >= 25 && imc <= 29.9) {
        imcClass = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
        imcClass = "Obesidade grau I"
    } else if (imc >= 35 && imc <= 39.9) {
        imcClass = "Obesidade grau II"
    } else if (imc >= 40) {
        imcClass = "Obesidade grau III"
    } else {
        imcClass = "IMC invalido!"
    }

    return imcClass;
}

BOTAO.onclick = function() {

    let peso = PESO.value.replaceAll(",", ".");
    let altura = ALTURA.value.replaceAll(",", ".");

    peso = Number(peso);
    altura = Number(altura);

    let imc = calculaImc(peso, altura);
    let imcClass = classificaImc(imc);
   
    RESPOSTA.textContent = `Seu IMC é: ${imc} - ${imcClass}`;
}