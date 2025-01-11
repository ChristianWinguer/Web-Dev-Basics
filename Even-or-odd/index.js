const btnCalculaParImpar = document.querySelector("#btnCalculaParImpar");
const outputResultado = document.querySelector("#outputResultado");
const inputNumero = document.querySelector("#inputNumero");

function isEven(numero) {
    let resultado;

    if (numero % 2 === 0) {
        resultado = `O número ${numero} é Par`;
        return resultado;
    }else if (numero % 2 !== 0) {
        resultado = `O número ${numero} é Ímpar`;
        return resultado;
    } else {
        resultado = `${numero} não é válido`;
        return resultado;
    }
};

btnCalculaParImpar.onclick = function () {
    let resultado = isEven(inputNumero.value);
    outputResultado.textContent = `${resultado}`;
};