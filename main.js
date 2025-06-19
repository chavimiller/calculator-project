let displayContent = document.querySelector("#display-content");
let operatorButtons = document.querySelectorAll(".operator");
let numberButtons = document.querySelectorAll(".number");
let clearButton = document.querySelector("#clear-button");
let deleteButton = document.querySelector("#delete-button");
let decimalButton = document.querySelector("#decimal-button");
let equalButton = document.querySelector("#equals-button")

let currentNumber = '';
let numberOne = "";
let numberTwo = "";

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

clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteDigit);
equalButton.addEventListener("click", evaluate)
decimalButton.addEventListener("click", addDecimal)

displayContent.textContent = '0'

operatorButtons.forEach((button) =>
button.addEventListener("click", (e) => {
    let op = e.key || e.target.innerText;
    console.log(op)
}))

numberButtons.forEach((button) =>   
button.addEventListener("click", (e) => {
    let num = e.key || e.target.innerText;
    displayContent.textContent = ''
    currentNumber += num
    displayContent.textContent += currentNumber
    console.log(currentNumber)
})
)

function clearDisplay() {
    displayContent.textContent = '0';
}

function deleteDigit() {
    currentNumber = currentNumber.slice(0, -1)
    displayContent.textContent = currentNumber
    if (currentNumber === '')
        displayContent.textContent = "0"
    console.log(currentNumber)
    return;
}

function evaluate() {
    return;
}

function addDecimal(e) {
    let decimal = e.key || e.target.innerText;
    currentNumber += decimal
    displayContent.textContent += decimal
    console.log(currentNumber)
}