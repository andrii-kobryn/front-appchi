"use strict"

const calcObject = {
    firstValue: undefined,
    secondValue: undefined,
    action: undefined,
};
function handleBlur(event, property) {
    calcObject[property] = event.target.value;
    console.log(calcObject);
}

function showRes() {
    alert(calculateRes())
}

function calculateRes() {
    if(calcObject.firstValue === undefined || calcObject.secondValue === undefined) {
        return "Введіть значення"
    }
    switch (calcObject.action) {
        case "+":
            return +calcObject.firstValue + +calcObject.secondValue;
        case "-":
            return +calcObject.firstValue - +calcObject.secondValue;
        case "*":
            return +calcObject.firstValue * +calcObject.secondValue;
        case "/":
            return +calcObject.secondValue === 0
                ? "Не можна ділити на 0"
                : +calcObject.firstValue / +calcObject.secondValue;
        default:
            return "Оберіть дію"
    }
}