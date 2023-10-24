"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const codeInput = document.getElementById('code');
    const divShow = document.querySelector(".show");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const codeValue = codeInput.value;

        fetch(`https://http.dog/${codeValue}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Помилка HTTP: ' + response.status);
                }
                return response.json(); // Припускаємо, що ви очікуєте JSON-відповідь.
            })
            .then(data => {
                const jpegUrl = data.image.jpg;
                const img = document.createElement('img');
                img.src = jpegUrl;
                divShow.innerHTML = "";
                divShow.appendChild(img);
            })
            .catch(error => {
                console.error(error);
            });
    });

});