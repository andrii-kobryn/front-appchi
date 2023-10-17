"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table");
    const addGrade =table.querySelectorAll(".add-grade");

    addGrade.forEach(button => {
        button.addEventListener("click", function () {
            const row = button.closest("tr");
            const gradeCell = row.querySelector(".grade");

            const res = prompt("Веддіть оцінку");
            gradeCell.textContent += res + " ";
        })
    })
});
