"use strict"
const DEFAULT_DAY = "Пн";
const DEFAULT_DURATION = "0";
const DEFAULT_LESSON = "Name";

const table = document.querySelector(".main-table");
const tableBody = table.querySelector(".main-tbody");
const addButton = document.querySelector(".add-lesson");
const addCacheButton = document.querySelector(".add-cache");
const showCacheButton = document.querySelector(".show-cache");
const cacheTable = document.querySelector(".cache-table");
const cacheTableBody = cacheTable.querySelector(".cache-tbody");
addButton.addEventListener("click", function () {
    addLesson(tableBody);
});

addCacheButton.addEventListener("click", function () {
    saveTableToCache(tableBody);
})

showCacheButton.addEventListener("click", function () {
    showCache(cacheTableBody);
});

function saveTableToCache(tbody) {
    const lessons = [];

    const rows = tbody.querySelectorAll("tr");

    for (const row of rows) {
        const cells = row.querySelectorAll("td");

        const day = cells[0].textContent;
        const duration = cells[1].textContent;
        const lessonName = cells[2].textContent;

        lessons.push({
            day,
            duration,
            lessonName,
        });
    }

    localStorage.setItem("lessons", JSON.stringify(lessons.reverse()));
}

function showCache(cachedTableBody) {
    cachedTableBody.innerHTML = "";
    loadCache(cachedTableBody);
}

function loadCache(cachedTableBody) {
    const lessonsCache = localStorage.getItem("lessons");

    if (lessonsCache) {
        const lessons = JSON.parse(lessonsCache);
        for (const lesson of lessons) {
            const row = cachedTableBody.insertRow(0);
            const day = row.insertCell(0);
            const duration = row.insertCell(1);
            const lessonName = row.insertCell(2);

            day.textContent = lesson.day;
            duration.textContent = lesson.duration;
            lessonName.textContent = lesson.lessonName;
        }
    }
}

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
