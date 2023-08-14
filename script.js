const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(...args){
    let product = 1;
    for (let i = 0; i < args.length; i++) {
      product *= args[i];
    }
    return product;
};

const divide = function(num1, num2) {
    return num1 / num2;
};

let num1 = 0;
let operator = "";
let num2 = 0;

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return "Invalid operator";
    }
}