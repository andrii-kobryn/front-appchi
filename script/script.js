"use strict"
const DEFAULT_DAY = "Пн";
const DEFAULT_DURATION = "0";
const DEFAULT_LESSON = "Name";

const table = document.querySelector(".main-table");
const tableBody = table.querySelector(".main-tbody");
const addButton = document.querySelector(".add-lesson");
addButton.addEventListener("click", function () {
    addLesson(tableBody);
});

function addLesson(tableBody) {
    const newRow = tableBody.insertRow(0);
    const day = newRow.insertCell(0);
    const duration = newRow.insertCell(1);
    const lessonName = newRow.insertCell(2);
    const deleteCell = newRow.insertCell(3);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button fas fa-trash-alt";
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        const parentRow = deleteButton.parentElement.parentElement;
        parentRow.remove();
    })

    day.textContent = DEFAULT_DAY;
    duration.innerHTML = DEFAULT_DURATION;
    lessonName.innerHTML = DEFAULT_LESSON;

    const rows = tableBody.querySelectorAll("tr");
    changeCells(rows);
}

function changeCells(rows) {
    for (const row of rows) {
        const cells = row.querySelectorAll("td");
        for (const cell of cells) {
            cell.addEventListener("click", function () {
                switch (cell.cellIndex) {
                    case 0:
                        return changeLessonDay(cell);
                    case 1:
                        return changeLessonDuration(cell);
                    case 2:
                        return changeLessonName(cell);
                    default:
                        console.log("Незрозуміла дія");
                }
            })
        }
    }
}

function changeLessonDay(cell) {
    const daysOfWeekPattern = /^(Пн|Вт|Ср|Чт|Пт|Сб|Нд)$/;
    let cellValue = cell.textContent;
    cell.contentEditable = true;
    cell.focus();

    cell.addEventListener("blur", () => {
        cell.contentEditable = false;
        const newCellValue = cell.textContent;
        if (daysOfWeekPattern.test(newCellValue)) {
            cell.textContent = newCellValue;
        } else {
            cell.textContent = cellValue;
            alert("Значення невірне, допустимі значення: Пн, Вт, Ср, Чт, Пт, Сб, Нд!")
        }
    });
}

function changeLessonDuration(cell) {
    let cellValue = cell.textContent;
    cell.contentEditable = true;
    cell.focus();

    cell.addEventListener("blur", () => {
        cell.contentEditable = false;
        const newCellValue = cell.textContent;
        if (!isNaN(newCellValue) && +newCellValue >= 0 && +newCellValue <= 100) {
            cell.textContent = newCellValue;
        } else {
            cell.textContent = cellValue;
            alert("Число повинно бути в межах від 0 до 100!")
        }
    });
}

function changeLessonName(cell) {
    cell.contentEditable = true;
    cell.focus();

    cell.addEventListener("blur", () => {
        cell.contentEditable = false;
    })
}
