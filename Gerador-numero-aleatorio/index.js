
const btnRoll = document.getElementById("btnRoll");
const rolled = document.getElementById("rolled");
const d4 = document.getElementById("d4");
const d6 = document.getElementById("d6");
const d8 = document.getElementById("d8");
const d10 = document.getElementById("d10");
const d20 = document.getElementById("d20");

btnRoll.onclick = function() {

    if (d4.checked) {
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        rolled.textContent = `${randomNumber}`
    } else if (d6.checked) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        rolled.textContent = `${randomNumber}`
    } else if (d8.checked) {
        let randomNumber = Math.floor(Math.random() * 8) + 1;
        rolled.textContent = `${randomNumber}`
    } else if (d10.checked) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        rolled.textContent = `${randomNumber}`
    } else if (d20.checked) {
        let randomNumber = Math.floor(Math.random() * 20) + 1;
        rolled.textContent = `${randomNumber}`
    } else {
        rolled.textContent = `Choose one of the dices`
    }

}
