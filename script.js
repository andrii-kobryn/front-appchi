"use strict"
document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("ul1");
    const liElements = list.getElementsByTagName("li");

    for (let li of liElements) {
        li.addEventListener("click", function () {
            changer(li);
        });
        console.log(li.textContent);
    }
});

function changer(li) {
    if (li.style.textDecoration === 'none') {
        li.style.color = 'lightgrey';
        li.style.textDecoration = 'line-through';
    } else {
        li.style.color = 'black';
        li.style.textDecoration = 'none';
    }
}
