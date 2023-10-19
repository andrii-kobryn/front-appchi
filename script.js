let tasks = [
    'Купити хліб',
    'Зробити щось',
    'Піти кудись'
];

console.log(tasks.length);

console.log(tasks.pop());
console.log(...tasks);

tasks.unshift('Прочитати книгу');

localStorage.setItem('tasks', JSON.stringify(tasks));

let localArr = JSON.parse(localStorage.getItem('tasks'));
console.log(localArr);

const index = localArr.findIndex(el => el === 'Прочитати книгу');
localArr[index] = 'Прочитати 2 книги';

localStorage.setItem('newTasks', JSON.stringify(localArr));

localStorage.removeItem('newTasks');
localStorage.removeItem('tasks');

