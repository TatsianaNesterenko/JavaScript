//Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

// Функция readFileSync считывает данные из файла синхронно
// Мы сначала загружаем модуль fs в наше приложение. Затем мы используем функцию readFileSync и передаем ей относительный путь к файлу, который мы хотим прочитать.
// Однако мы хотим прочитать файл в формате JSON, а не необработанные шестнадцатеричные данные. Именно здесь в игру вступает функция JSON.parse. Эта функция разбирает необработанные данные, преобразует их в текст ASCII и разбирает фактические данные JSON в объект JavaScript.
const fs = require('fs');
const massiv = JSON.parse(fs.readFileSync('./task2.json'));

// Решение 1

// Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
// Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
// Синтаксис  new Set([iterable]);
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// => стрелочная функция 
// Метод JSON.stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.
// Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.

console.log('**********решение 1 \не переносит данные массива в массиве\\ GEO**********');

const new_obj = Array.from(new Set(massiv.map(obj => JSON.stringify(obj)))).map(obj => JSON.parse(obj));
console.log(new_obj);

// Решение 2

console.log('**********решение 2**********');

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

 const new_obj_2 = massiv.reduce((username_info, currentValue) => {
     if (username_info.every(item => !(item.name === currentValue.name)))username_info.push(currentValue);
     return username_info;
   }, 
   []);
   
   console.log(new_obj_2);

// Решение 3

console.log('**********решение 3**********');

const new_obj_3 = [];// создаем новый пустой массив

// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
// метод indexOf() позволяет возвратить индекс искомого элемента в массиве при первом совпадении, или -1 если элемент не найден. Для того, чтобы произвести поиск необходимого элемента с конца массива, Вы можете воспользоваться методом lastIndexOf().
// Метод JSON.stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.
// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

massiv.forEach((obj) => {
    if (new_obj_3.indexOf (JSON.stringify(obj)) === -1) {//если элемент не найден (-1)
        new_obj_3.push(JSON.stringify(obj));//заносим элемент массива в новый массив
    }
});

console.log('****1****')

console.log(new_obj_3.map(obj => JSON.parse(obj)));

console.log('****2****')

const new_obj_31 = Array.from(new_obj_3.map(obj => JSON.parse(obj)));//преобразуем массив в JSON вид
console.log(new_obj_31);
