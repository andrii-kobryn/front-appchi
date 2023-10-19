let books = [
    'Гаррі Поттер',
    'Відьмак'
];

books.push('1984');
console.log(...books);

books.sort();
console.log(...books);

books.pop();
console.log(...books);

books.unshift('Гра престолів');
console.log(...books);

books.shift()
console.log(...books);

books[1] = 'Хобіт';
console.log(...books);

const hasHarry = books.find(el => el === 'Гаррі Потер');
console.log(hasHarry);