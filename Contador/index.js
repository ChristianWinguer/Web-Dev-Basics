const outputContagem = document.querySelector("#outputContagem");
const btnDiminuirContagem = document.querySelector("#btnDiminuirContagem");
const btnResetContagem = document.querySelector("#btnResetContagem");
const btnAumentarContagem = document.querySelector("#btnAumentarContagem");

let contagem = 0;
outputContagem.textContent = `${contagem}`;

btnDiminuirContagem.addEventListener("click", function(event) {
    event.preventDefault();

    contagem -= 1;
    outputContagem.textContent = `${contagem}`;
});

btnResetContagem.addEventListener("click", function(event) {
    event.preventDefault();

    contagem = 0;
    outputContagem.textContent = `${contagem}`
});

btnAumentarContagem.addEventListener("click", function(event) {
    event.preventDefault();

    contagem += 1;
    outputContagem.textContent = `${contagem}`;
});