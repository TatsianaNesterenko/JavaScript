// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// Решение 1

console.log(`Решение 1 для 1 задания с оператором while`)

let number_1 = 2//число
let exp = 10//максимальная степень
let result_1 = 1//начальное значение результата
let cnt = 1//начальная степень

while (cnt <= exp){//пока степень возведения меньше предела
  result_1 = result_1 * number_1
  console.log(result_1)
  cnt++
}

// Решение 2

console.log(`Решение 2 для 1 задания с оператором while упрощенное`)

let i = 1
let result = 1

while (i<11) {
result = result*2
i++
}
console.log(result)

// Решение 3

console.log(`Решение 3 для 1 задания методом Math.pow`)

let number = 2
for (let i = 1; i <= 10; i++){//запуск оператора for
    console.log(Math.pow(number, i))// Метод Math.pow(base, exponent) 
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

//Решение 1

// console.log(`Решение 1 для 1* задания методом Math.pow с выводом в браузер`)

// const div = document.getElementById('1_Anatol')//доступ к элементу в верстке
// let exp_1 = prompt(`Введите максимальную степень для возведения 2`)
// let number_2 = 2

// for (let i = 0; i <= exp_1; i++){//запуск оператора for
//     div.innerHTML +=Math.pow(number_2, i) + '<br />'// += чтобы не перезатиралась запись 
// }

//Решение 2

console.log(`Решение 2 для 1* задания оператором for`)

const erection = function(exp_3) {// аргумент в степень до которой нужно возвести число
    let result_3 = 1//начальное значение степени
    for (let i = 1; i <= exp_3; i++) {//начало цикла for
        result_3 = result_3 *2//каждый раз возведение в степень
    }
    return result_3//завершает выполнение данной функции и возвращает ее значение
}
console.log(erection(10))//один раз выводим значение

//Решение 3

console.log(`Решение 3 для 1* задания самый простой*`)

const erection_2 = function(exp_4){
    return Math.pow(2, exp_4)
}
console.log(erection_2(10))// Выводим 2 в значении введенной оператором

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// Решение 1

console.log(`Решение 1 для 2 задания оператором for`)

let letter = ':)'
let letter1 = ''

for (let i = 0; i < 5; i++){//запуск оператора for
    letter1 +=letter
    console.log(letter1)// Выводим значение строки 

}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// Решение 1

console.log(`Решение 1 для 2* задания оператором for`)

function printSmile(stroka, numberOfRows){//Задаем функцию с двумя переменными
let stringer = ''

for (let i = 1; i <= numberOfRows; i++){//запуск оператора for
    stringer +=stroka
    console.log(stringer)// Выводим значение строки 

    }
}
printSmile(':_))', 6)//задаем значения функции

// Решение 2

// console.log(`Решение 2 для 2* задания с выводом в браузер`)

// const div = document.getElementById('2_Anatol')//доступ к элементу в верстке
// let stroka = prompt(`Введите любую строку`)
// let povtorenie = prompt(`Введите количество сложений строк`)
// let str = ''

// for (let i = 1; i <= povtorenie; i++){//запуск оператора for
//     str +=stroka
//     div.innerHTML +=str + '<br />'// += чтобы не перезатиралась запись 
// }


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

console.log(`Решение 1 для 3** задания с операторами if и циктом for самое понятное`)

function getWordStructure(world) {

    let vowels_list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']//гласные
    let vowels = 0
    let consonants_list = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'w', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']//согласные
    let consonants = 0
    
    for (let i = 0; i < world.length; i++) {//проверяем наше слово до тех пор пока i не равно длине слова
        for (let j = 0; j < vowels_list.length; j++){//цикл для гласных
            if (world[i] === vowels_list[j]){//проверяем соответствие буквы [i] с массивом гласных
                vowels++//добавляем значение +1
                break;
            } 
        }
   
    
        for (let l = 0; l < consonants_list.length; l++){//цикл для согласных
            if (world[i] === consonants_list[l]){//проверяем соответствие буквы [i] с массивом согласных
                consonants++//добавляем значение +1
                break;
            }
        }

    }
    console.log('Слово ' + world + ' состоит из ' + vowels + ' гласных и ' + consonants + ' согласных букв')
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')

// Решение 2

console.log(`Решение 2 для 3** задания с регулярным выражением через метод match`)

function getWordStructure(worlds) {
    let vowel = worlds.match(/[aeiou]/gi);//не зависимо от регистра gi; в / / то что мы ищем в регулярном выражении
    let consonant = worlds.match(/[bcdfjhgklmnpqrstvwxyz]/gi);
    console.log('Слово ' + worlds + ' состоит из ' + vowel.length + ' гласных и ' + consonant.length + ' согласных букв')
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

// Решение 1

console.log(`Решение 1 для 4** задания с операторами if и for не проверяет регистр`)

function isPalindrom(word) {
    let a = ''//переменная для переворачивания слова
    for (let i = word.lehth -1; i >=0; i--){
        a=a + word[i]
    }
    if(word.toLowerCase() == a.toLowerCase()) {//Метод toLowerCase() возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.
        console.log('Слово ' + word + ' палиндромом')
    } else {
        console.log('Слово ' + word + ' не палиндромом')
    }
}
    isPalindrom('madam');
    isPalindrom('nurses run');
    isPalindrom('fox');
    isPalindrom('abba');
    isPalindrom('Abba');

//     // Решение 2

    console.log(`Решение 2 для 4** задания с функцией toLowerCase`)

function isPalindrom1(world){
        let cstr = world.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        let ccount = 0;
        if(cstr==="") {
            console.log(world + " Nothing found!");
            return false;
        }
    
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
 
            if (cstr.length === 1) {
                console.log(world + " Entry is a palindrome.");
                return true;
            } else {
  
                ccount = (cstr.length - 1) / 2;
            }
        }
            for (let x = 0; x < ccount; x++) {
   
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log(world + " Entry is not a palindrome.");
                return false;
            }
        }
        console.log(world + " The entry is a palindrome.");
        return true;
    }
    isPalindrom1('madam');
    isPalindrom1('nurses run');
    isPalindrom1('fox');
    isPalindrom1('abba');
    isPalindrom1('Abba');

// // // Решение 3

console.log(`Решение 3 для 4** задания с операторами if и for не учитывает регистр`)

function isPalindrom2(word)
{
   let n = word.length;
   for(let i = 0; i < n/2; i++)
   {  
      if (word.charAt(i) !== word.charAt(n-1-i)){
      console.log('Слово ' + word + ' не является Полиндромом ')
        return false;
     }  else {
       console.log('Слово ' + word + ' является Полиндромом ')
       return true;
    }
   
    }
}

isPalindrom2('Abba')
isPalindrom2('abba')
isPalindrom2('abba1')

// Решение 4 для 4** с использованием встроенных функций  Split ' '  метод

console.log(`Решение 4  для 4** задания с Split`)

function isPalindrom4(string) {

    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('Слово ' + string + ' является Полиндромом ');
    }
    else {
        console.log('Слово ' + string + ' не является Полиндромом ');
    }
}

isPalindrom4('Abba')
isPalindrom4('abba')
isPalindrom4('abba1')

// Решение 5

console.log(`Решение 5  для 4** задания с методом Split и приведением к нижнему регистру toLowerCase`)

function isPalindrom5(word){
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}
console.log(`${isPalindrom5('Abba') ? 'Это полиндромом' : 'Это не полиндром'}`)
