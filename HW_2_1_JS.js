const div = document.getElementById('1_Anatol')//доступ к элементу в верстке
let exp_1 = prompt(`Введите максимальную степень для возведения 2`)
let number_2 = 2

for (let i = 0; i <= exp_1; i++){//запуск оператора for
    div.innerHTML +=Math.pow(number_2, i) + '<br />'// += чтобы не перезатиралась запись 
}
