"use strict"

function delayedGreeting(duration, message) {
    return new Promise((resolve, reject) => {
        if (duration > 10000) {
            reject(new Error("Затримка занадто довга"));
        } else {
            resolve(message);
        }
        setTimeout(() => {}, duration);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const delayInput = document.getElementById('delay');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const duration = parseInt(delayInput.value);
        const message = messageInput.value;

        delayedGreeting(duration, message)
            .then((result) => {
                console.log(message);
            })
            .catch((error) => {
                console.error(error.message);
            });
    });
});