const botaoConverterTemp = document.querySelector("#converterTemp");
const userInput = document.querySelector("#userInput");
const radioParaFahrenheit = document.querySelector("#paraFahrenheit");
const radioParaCelsius = document.querySelector("#paraCelsius");
const mensagemOutput = document.querySelector("#mensagemOutput");

function paraCelsius(temperatura) {
    return (temperatura - 32) * 5 / 9;
};

function paraFahrenheit(temperatura) {
    return (temperatura * 9 / 5) + 32;
};

botaoConverterTemp.addEventListener("click", function(event) {
    event.preventDefault();

    let temperatura = Number(userInput.value);
    let temperaturaConvertida;

    if (radioParaCelsius.checked) {
        temperaturaConvertida = paraCelsius(temperatura);
        mensagemOutput.textContent = `A conversão de ${temperatura} graus Fahrenheit para Celsius é ${temperaturaConvertida} graus`;
    } else if (radioParaFahrenheit.checked) {
        temperaturaConvertida = paraFahrenheit(temperatura);
        mensagemOutput.textContent = `A conversão de ${temperatura} graus Celsius para Fahrenheit é ${temperaturaConvertida} graus`;
    } else {
        mensagemOutput.textContent = `Por favor, selecione uma das opções de conversão para continuar`;
    }

});


