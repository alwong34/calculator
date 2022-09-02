function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    }
    else if (operator == "-") {
        return subtract(a,b);
    }
    else if (operator == "x") {
        return multiply(a,b);
    }
    else if (operator == "÷") {
        return divide(a,b);
    }
    else {
        return "ERROR Not a valid operator";
    }
}

let displayValue = "";
const output = document.getElementById("output");

function populateDisplay() {
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }

    displayValue += this.innerHTML;
    let newOutput = document.createElement("p");
    newOutput.id ="input";
    newOutput.innerHTML = displayValue;

    output.appendChild(newOutput);
}

let numbers = document.querySelectorAll(".number");
Array.from(numbers).map(number => number.onclick = populateDisplay);

function clearDisplay() {
    displayValue = "";
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
}

let clearBtn = document.getElementsByClassName("clear");
clearBtn[0].onclick = clearDisplay;


let firstNum = "";
let selectedOperator = "";

function operatorClick() {
    firstNum = document.getElementById("input").innerHTML;
    selectedOperator = this.innerHTML;

    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }

    displayValue = "";
}

let operators = document.querySelectorAll(".operator");
Array.from(operators).map(operator => operator.onclick = operatorClick);

function equals() {
    let secondNum = document.getElementById("input").innerHTML;

    let result = document.createElement("p");
    result.id ="input";
    result.innerHTML = operate(selectedOperator, parseFloat(firstNum), parseFloat(secondNum)).toFixed(2);

    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }

    output.appendChild(result);
}

let equalsBtn = document.getElementById("equals");
equalsBtn.onclick = equals;