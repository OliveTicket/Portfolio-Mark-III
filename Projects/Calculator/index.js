// Calculator Program
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    const expression = display.value;

    if (expression.includes('+')) {
        let numbers = expression.split('+');
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    }
    else if (expression.includes('-')) {
        let numbers = expression.split('-');
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    }
    else if (expression.includes('*')) {
        let numbers = expression.split('*');
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    }
    else if (expression.includes('/')) {
        let numbers = expression.split('/');
        if (parseFloat(numbers[1]) === 0 ){
            result  = 'Error'
        }
        else {
            result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        }
    }

    display.value = result;
}

