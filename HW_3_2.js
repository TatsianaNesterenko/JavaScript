// Task 2*

// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу

// План:
//- данные клонов объектов идентичны
//- преобразуем каждый объект в строку
//- создаем Set(он оставит только уникальные значения)
//- создаём массив
//- каждый элемент(строку) - преобразуем в объект


const massiv = [
    {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
        }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
    }
},
{
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
        }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
},
{
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
        }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
    }
},
{
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
},
{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
        }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
    }
},
{
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
},
{
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
}
];

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
