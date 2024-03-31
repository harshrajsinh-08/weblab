function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        default:
            return null;
    }
}
const nums = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const display = document.querySelector('.display');
let firstOperand = '';
let currentOperator = null;
nums.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});
operators.forEach(button => {
    button.addEventListener('click', () => {
        calculate();
        firstOperand = display.textContent;
        currentOperator = button.textContent;
        display.textContent = '';
    });
});

equals.addEventListener('click', () => {
    calculate();
});

function calculate() {
    if (currentOperator === null) return;
    const secondOperand = display.textContent;
    display.textContent = operate(currentOperator, firstOperand, secondOperand);
    currentOperator = null;
}

