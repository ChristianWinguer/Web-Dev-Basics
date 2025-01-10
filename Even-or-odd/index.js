const BTNSUBMIT = document.getElementById("btnSubmit");
const NUMBER = document.getElementById("number");
const RESULT = document.getElementById("result");

function isEven(number) {
    
    let result;

    if (number % 2 === 0) {
        result = "This number is Even";
        return result;
    }else if (number % 2 !== 0) {
        result = "This number is Odd";
        return result;
    } else {
        result = "This is not a valid number!!!";
        return result;
    }

};

BTNSUBMIT.onclick = function () {
    let result = isEven(NUMBER.value);
    RESULT.textContent = `${result}`;
};