let displayContent = document.querySelector("#display-content");
let operatorButtons = document.querySelectorAll(".operator");
let numberButtons = document.querySelectorAll(".number");
let clearButton = document.querySelector("#clear-button");
let deleteButton = document.querySelector("#delete-button");
let decimalButton = document.querySelector("#decimal-button");
let equalButton = document.querySelector("#equals-button");

let currentNumber = 0;
let numberOne = "";
let numberTwo = "";
let currentOperator = "";

function varStatus() {
  console.log(
    `currentOperator: ${currentOperator} currentNumber: ${currentNumber} numberOne: ${numberOne} numberTwo: ${numberTwo}`
  );
}

function add(a, b) {
  return (result = a + b);
}

function subtract(a, b) {
  return (result = a - b);
}

function multiply(a, b) {
  return (result = a * b);
}

function divide(a, b) {
  return (result = a / b);
}

clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteDigit);
equalButton.addEventListener("click", evaluate);
decimalButton.addEventListener("click", addDecimal);

displayContent.textContent = "0";

operatorButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    currentOperator = e.key || e.target.innerText;
    if (currentNumber === 0) {
      displayContent.textContent = currentOperator;
      console.log("Need to enter first argument");
    }
    numberOne = parseFloat(currentNumber);
    currentNumber = "";
    displayContent.textContent = currentOperator;
    varStatus();
  })
);

numberButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let num = e.key || e.target.innerText;
    if (currentNumber === 0) {
      currentNumber = num;
    } else {
      currentNumber += num;
    }
    displayContent.textContent = currentNumber;
    varStatus();
  })
);

function clearDisplay() {
  displayContent.textContent = "0";
  currentNumber = 0;
  numberOne = "";
  numberTwo = "";
  currentOperator = "";
  varStatus();
}

function deleteDigit() {
  if (currentNumber === 0) {
    displayContent.textContent = "0";
    varStatus();
  } else currentNumber = currentNumber.slice(0, -1);
  displayContent.textContent = currentNumber;
}

function evaluate() {
  if (currentOperator !== "" && numberOne !== "") {
    numberTwo = parseFloat(currentNumber);
    currentNumber = "";
    let result;
    switch (currentOperator) {
      case "+":
        result = add(numberOne, numberTwo);
        break;
      case "-":
        result = subtract(numberOne, numberTwo);
        break;
      case "*":
        result = multiply(numberOne, numberTwo);
        break;
      case "/":
        result = divide(numberOne, numberTwo);
        break;
    }
    console.log(result);
    displayContent.textContent = result;
  } else displayContent.textContent = "#&!?";
  varStatus();
}

function addDecimal(e) {
  let decimal = e.key || e.target.innerText;
  currentNumber += decimal;
  displayContent.textContent += decimal;
  varStatus();
}
