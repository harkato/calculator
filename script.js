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

