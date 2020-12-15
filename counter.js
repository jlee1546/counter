const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');
let digit = 0;

function add() {
    const display = document.querySelector('.display');
    digit += 1;
    display.textContent = digit;

}

function subtract() {
    const display = document.querySelector('.display');
    digit -= 1;
    display.textContent = digit;
}

addition.addEventListener('click',add);
subtraction.addEventListener('click',subtract);
