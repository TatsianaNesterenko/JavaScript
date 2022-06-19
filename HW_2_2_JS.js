const div = document.getElementById('2_Anatol')//доступ к элементу в верстке
let stroka = prompt(`Введите любую строку`)
let povtorenie = prompt(`Введите количество сложений строк`)
let str = ''

for (let i = 1; i <= povtorenie; i++){//запуск оператора for
    str +=stroka
    div.innerHTML +=str + '<br />'// += чтобы не перезатиралась запись 
}
