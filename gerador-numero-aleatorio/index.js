const inputNumeroDadosJogados = document.querySelector("#inputNumeroDadosJogados");
const btnJogarDados = document.querySelector("#btnJogarDados");
const outputMessagem = document.querySelector("#outputMessagem");

function jogarDados(numeroDadosJogados) {
    
    let resultadoDadosJogados = [];

    for (let i = 0; i < numeroDadosJogados; i++) {

        let dadoJogado = Math.floor(Math.random() * 6) + 1;
        resultadoDadosJogados.push(` ${dadoJogado}`);
    }

    return resultadoDadosJogados;
}


btnJogarDados.addEventListener("click", function(event){
    
    let numeroDadosJogados = inputNumeroDadosJogados.value;
    let resultadoDadosJogados = jogarDados(numeroDadosJogados);

    outputMessagem.textContent = `Os resultados dos dados rolados foram ${resultadoDadosJogados}`
});
