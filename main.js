// Стандарт кодирования airbnb, рекомендует
// использовать, по возможности, одинарные
console.log("Dracarys!");

// Экранируется только ", так как в этой ситуации
// двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No"

console.log("\\");
// => \

console.log("\\ \\ \\\\ \\\ \'\"");

console.log('- Are you hungry?\n- Aaaarrrgh!');

'a'.length;    // 1
'\n'.length;   // 1 !!!
'\n\n'.length; // 2 !!!

console.log('Gregor Clegane\nDunsen\nPolliver\nChiswyck');

console.log('\n');
console.log('Dunsen');
// =>
// =>
// => Dunsen

console.log('Polliver');
console.log('Gregor Clegane');
console.log();
console.log('Chiswyck');
console.log('\n');
console.log('Dunsen');
// => Polliver
// => Gregor Clegane
// =>
// => Chiswyck
// =>
// =>
// => Dunsen

console.log('Joffrey loves using \\n');
// => Joffrey loves using \n

console.log('Kings' + 'wood');     // => Kingswood

// Обратный порядок слов
console.log('road' + 'Kings');     // => roadKings

// Конкатенировать можно абсолютно любые строки
console.log("King's" + 'Landing'); // => King'sLanding

console.log("King's " + ' Landing');   // => King's  Landing

console.log("King's  " + '  Landing'); // => King's    Landing