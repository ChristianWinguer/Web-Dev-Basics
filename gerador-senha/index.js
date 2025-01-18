const btnGerarSenha = document.querySelector("#btnGerarSenha");
const inputTamanhoSenha = document.querySelector("#inputTamanhoSenha");
const caracteresMinusculos = document.querySelector("#caracteresMinusculos");
const caracteresMaiusculos = document.querySelector("#caracteresMaiusculos");
const caracteresNumericos = document.querySelector("#caracteresNumericos");
const CaracteresSimbolos = document.querySelector("#CaracteresSimbolos");
const outputMessagem = document.querySelector("#outputMessagem");

const grupoMinusculos = "abcdefghijklmnopqrstuvwxyz";
const grupoMaiusculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const grupoNumericos = "0123456789";
const grupoSimbolos = "!@#$%¨&*().;,";

function caracteresPossiveis() {
    let caracteresPossiveis = [];

    if (caracteresMinusculos.checked) {
        caracteresPossiveis.push(1);
    }
    if (caracteresMaiusculos.checked) {
        caracteresPossiveis.push(2);
    }
    if (caracteresNumericos.checked) {
        caracteresPossiveis.push(3);
    }
    if (CaracteresSimbolos.checked) {
        caracteresPossiveis.push(4);
    }

    return caracteresPossiveis;
}


function gerarSenha(tamanhoSenha, grupoMinusculos, grupoMaiusculos, grupoNumericos, grupoSimbolos) {
    
    let senha = [];
    let max;
    let min;
    let indiceGrupo = 0;
    const grupoTodosCaracteres = [...grupoMinusculos, ...grupoMaiusculos, ...grupoNumericos, ...grupoSimbolos];
    const tamanhoMinusculos = grupoMinusculos.length;
    const tamanhoMaiusculos = grupoMaiusculos.length;
    const tamanhoNumericos = grupoNumericos.length;
    const tamanhoSimbolos = grupoSimbolos.length;
    let grupoCaracteresPossiveis = caracteresPossiveis();
    
    
    for (let i = 0; i < tamanhoSenha; i++) {

        if (grupoCaracteresPossiveis[indiceGrupo] === 1) {
            min = 0;
            max = tamanhoMinusculos - 1;
            let caractereAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            senha.push(grupoTodosCaracteres[caractereAleatorio]);
            indiceGrupo = (indiceGrupo + 1) % grupoCaracteresPossiveis.length;


        } else if (grupoCaracteresPossiveis[indiceGrupo] === 2) {
            min = tamanhoMinusculos;
            max = tamanhoMinusculos + tamanhoMaiusculos - 1;
            let caractereAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            senha.push(grupoTodosCaracteres[caractereAleatorio]);
            indiceGrupo = (indiceGrupo + 1) % grupoCaracteresPossiveis.length;


        } else if (grupoCaracteresPossiveis[indiceGrupo] === 3) {
            min = tamanhoMinusculos + tamanhoMaiusculos;
            max = tamanhoMinusculos + tamanhoMaiusculos + tamanhoNumericos - 1;
            let caractereAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            senha.push(grupoTodosCaracteres[caractereAleatorio]);
            indiceGrupo = (indiceGrupo + 1) % grupoCaracteresPossiveis.length;

        } else if (grupoCaracteresPossiveis[indiceGrupo] === 4) {
            min = tamanhoMinusculos + tamanhoMaiusculos + tamanhoNumericos;
            max = tamanhoMinusculos + tamanhoMaiusculos + tamanhoNumericos + tamanhoSimbolos - 1;
            let caractereAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            senha.push(grupoTodosCaracteres[caractereAleatorio]);
            indiceGrupo = (indiceGrupo + 1) % grupoCaracteresPossiveis.length;

        }

    }

    senha = senha.join("");
    return senha;
};


btnGerarSenha.addEventListener("click", function(event) {
    event.preventDefault();

    let tamanhoSenha = inputTamanhoSenha.value;
    let grupoCaracteresPossiveis = caracteresPossiveis();

    if (tamanhoSenha < 4) {
        outputMessagem.textContent = `A senha precisa ter pelo menos 4 caracteres.`
    } else if (tamanhoSenha > 25) {
        outputMessagem.textContent = `A senha pode ter no máximo 25 caracteres.`
    } else if (grupoCaracteresPossiveis.length == 0) {
        outputMessagem.textContent = `Por favor, selecione quais tipos de caracteres você deseja na senha`
    } else {
            let senha = gerarSenha(tamanhoSenha, grupoMinusculos, grupoMaiusculos, grupoNumericos, grupoSimbolos);
             outputMessagem.textContent = `Sua senha é : ${senha}`
    }

});

