"use strict"

const firstValue = document.getElementById("first-value");
const action = document.getElementById("action");
const secondValue = document.getElementById("second-value");
const actions = ["+", "-", "/", "*"];

window.addEventListener("keydown", function (event) {
    if ((+event.key >= 0 || +event.key <= 9) || actions.includes(event.key)) {
        if (firstValue.textContent === "" && !isNaN(+event.key)) {
            firstValue.textContent = event.key;
            return;
        }

        if (action.textContent === "" && actions.includes(event.key) && firstValue.textContent !== "") {
            action.textContent = event.key;
            return;
        }

        if (secondValue.textContent === "" && !isNaN(+event.key) && action.textContent !== "") {
            secondValue.textContent = event.key;
            return;
        }
    }
});

function showResult() {
    if (firstValue.textContent !== "" && secondValue.textContent !== "" && action.textContent !== "") {
        const res = calculateRes();
        alert(res);
        firstValue.textContent = "";
        action.textContent = "";
        secondValue.textContent = "";
    }
}

function calculateRes() {
    switch (action.textContent) {
        case "+":
            return +firstValue.textContent + +secondValue.textContent;
        case "-":
            return +firstValue.textContent - +secondValue.textContent;
        case "*":
            return +firstValue.textContent * +secondValue.textContent;
        case "/":
            return +secondValue.textContent === 0
                ? "Не можна ділити на 0"
                : +firstValue.textContent / +secondValue.textContent;
    }
}
