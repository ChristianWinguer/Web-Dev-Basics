const radioAte10 = document.querySelector("#radioAte10");
const radioAte20 = document.querySelector("#radioAte20");
const radioAte100 = document.querySelector("#radioAte100");
const inputAdivinhe = document.querySelector("#inputAdivinhe");
const btnGerarNumero = document.querySelector("#btnGerarNumero");
const btnRevelarNumero = document.querySelector("#btnRevelarNumero");
const btnAdivinharNumero = document.querySelector("#btnAdivinharNumero");
const outputMessagem = document.querySelector("#outputMessagem");

let numeroAleatorio;

btnGerarNumero.addEventListener("click", function(event){

    event.preventDefault();

    if (radioAte10.checked) {
        numeroAleatorio = Math.floor(Math.random() * 10) + 1
        outputMessagem.textContent = `Um número entre 1 e 10 foi gerado!`
        console.log(numeroAleatorio)
    } else if (radioAte20.checked) {
        numeroAleatorio = Math.floor(Math.random() * 20) + 1
        outputMessagem.textContent = `Um número entre 1 e 20 foi gerado!`
        console.log(numeroAleatorio)
    } else if (radioAte100.checked) {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1
        outputMessagem.textContent = `Um número entre 1 e 100 foi gerado!`
        console.log(numeroAleatorio)
    } else {
        outputMessagem.textContent = "Selecione um intervalo para o número"
        console.log(numeroAleatorio)
    }
});

btnAdivinharNumero.addEventListener("click", function(event){
    event.preventDefault();

    let numeroChute = inputAdivinhe.value

    if (numeroChute > numeroAleatorio) {
        outputMessagem.textContent = `Você errou! O número é menor que ${numeroChute}`;
    } else if (numeroChute < numeroAleatorio) {
        outputMessagem.textContent = `Você errou! O número é maior que ${numeroChute}`;
    } else if (numeroChute = numeroAleatorio) {
        outputMessagem.textContent = `Você acertou! O número era ${numeroAleatorio}`;
    } else {
        outputMessagem.textContent = `${numeroChute} não é um número valido!`
    }

});


btnRevelarNumero.addEventListener("click", function(event) {

    event.preventDefault();

    if (numeroAleatorio == undefined) {
        outputMessagem.textContent `Por favor, gere um número antes de revela-lo`
    } else {
        outputMessagem.textContent = `O número gerado era ${numeroAleatorio}`;
    }
});
