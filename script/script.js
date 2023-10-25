'use strict'
const URL = 'https://api.restful-api.dev/objects';
const POST_VALUE = 'POST';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('.name');
    const yearInput = form.querySelector('.year');
    const priceInput = form.querySelector('.price');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const obj = createObj(nameInput.value, yearInput.value, priceInput.value);
        fetch(URL, {
            method: POST_VALUE,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Smth wrong');
                }
                return response.json();
            })
            .then(data => {
                if (data.hasOwnProperty('createdAt')) {
                    const displayDataEl = document.createElement('div');
                    displayDataEl.className = 'created-at';
                    displayDataEl.textContent = `Created at: ${data.createdAt}`;
                    document.body.appendChild(displayDataEl);
                } else {
                    console.log('field createdAt does not exist')
                }

            })
            .catch(error => {
                console.log(`Haha, error -> ${error}`)
            })
    });
});

function createObj(name, year, price) {
    return {
        name: name,
        year: year,
        price: price
    };
}