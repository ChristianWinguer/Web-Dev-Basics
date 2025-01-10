let num = 0;

num = document.getElementById("numero").textContent = `${num}`

document.getElementById("botaoMenos").onclick = function() {
    num = Number(num);
    num -= 1;
    num = document.getElementById("numero").textContent = `${num}`
};

document.getElementById("botaoReset").onclick = function() {
    num = Number(num);
    num = 0;
    num = document.getElementById("numero").textContent = `${num}`
}

document.getElementById("botaoMais").onclick = function() {
    num = Number(num);
    num += 1;
    num = document.getElementById("numero").textContent = `${num}`
}