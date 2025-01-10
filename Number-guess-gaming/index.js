const BTNGUESS = document.getElementById("btnGuess");
const BTNREVEALING = document.getElementById("btnRevealing");
const BTNGENERATE = document.getElementById("btnGenerate");
const INGUESS = document.getElementById("inGuess");
const ONETEN = document.getElementById("oneTen");
const ONETWENTY = document.getElementById("oneTwenty");
const ONEHUNDRED = document.getElementById("oneHundred");
const RESPONSE = document.getElementById("response");

let randomNumber;

BTNGENERATE.onclick = function () {
    if (ONETEN.checked) {
        randomNumber = Math.floor(Math.random() * 10) + 1
        RESPONSE.textContent = `Random number generated`
    } else if (ONETWENTY.checked) {
        randomNumber = Math.floor(Math.random() * 20) + 1
        RESPONSE.textContent = `Random number generated`
    } else if (ONEHUNDRED.checked) {
        randomNumber = Math.floor(Math.random() * 100) + 1
        RESPONSE.textContent = `Random number generated`
    } else {
        RESPONSE.textContent = "Select a range for the random number!"
    }
}

BTNGUESS.onclick = function() {
    let guess = INGUESS.value
    
    if (guess == randomNumber) {
        RESPONSE.textContent = `You guessed it right! The random number is ${guess}`
    } else {
        RESPONSE.textContent = `${guess} is not the number! Try again!`
    }
}

BTNREVEALING.onclick = function () {

    if(randomNumber == undefined) {
        RESPONSE.textContent = `Please, generate a random number first!`
    } else {
        RESPONSE.textContent = `The random number was: ${randomNumber}`
    }
}

