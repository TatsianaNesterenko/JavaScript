// // Task 3**
// // В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//   .forEach - перебирает всегда все элементы, очень медленно работает, на больших массивах правильнее использовать for
// .some - перебирает до тех пор, пока callback не сделает return true;
// .every - перебирает пока callback не сделает return false или любое не-истинное значение, т.е. !== true.

// some и every легко путать, чтобы запомнить смотрим на первую букву:
// .some - первая буква S - SUCCESS (перебираем пока не вернётся true);
// .every - первая буква E - ERROR (перебираем, пока не вернётся !== true).
  
//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
//   **Пример:**
  
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

console.log('**********Задание 1**********');

// возвращает правильную форму числительного для числа: 1 сотрудник, 3 сотрудника, 5 сотрудников
function getDeclension(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20)? 2: cases[(number % 10 < 5)? number % 10: 5]];
}

// возвращает число сотрудников с правильной формой числительного
function formatEmployeesCount(count) {
  // отдельная ситуация, потому что ноль нас почему-то не утраивает...
  if (!count) {
    return 'нет сотрудников';
  }
  return `${count} ${getDeclension(count, [ 'сотрудник', 'сотрудника', 'сотрудников' ])}`;
}

// для всех предприятий
enterprises.forEach(enterprise => {
  // мы не можем сразу начать вывод, потому что сначала просят название предприятия, поэтому просто сохраним в массиве
  // можно использовать и строки, но массивы удобнее
  const output = [];

  // количество сотрудников в этом предприятии
  let employees = 0;
  // для всех отделов этого предприятия
  enterprise.departments.forEach(department => {
    // считаем количество жертв
    employees += department.employees_count;

    // добавляем в  (в конец массива), который выведем когда-нибудь...
    output.push(`- ${department.name} (${formatEmployeesCount(department.employees_count)})`);
  });

  // добавляем в вывод - в начало массива...
  output.unshift(`${enterprise.name} (${formatEmployeesCount(employees)})`);

  // выводим, объединив в строку и добавив символы новой строки
  console.log(output.join('\n'));
});
//   2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
  
//   Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2

console.log('**********Задание 2**********');

const getEnterpriseName = function(searchDepartments) {
  let countNameEnterprise = 0;
  enterprises.forEach((ent) => {
    if (ent.departments) {
      ent.departments.forEach((dep) => {
        if (+searchDepartments) {
          if (dep.id == searchDepartments) {
            console.log(ent.name); 
            countNameEnterprise++;
          } 
        } else {
          if (dep.name == searchDepartments) {
            console.log(ent.name);
            countNameEnterprise++;
        } 
        }
      })
    }
  }  )
  countNameEnterprise == 0 ? console.log('В предприятиях не найдено такого отдела') : false
};  
getEnterpriseName('Отдел маркетинга');
getEnterpriseName(7);
getEnterpriseName(11);
  
//   3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// console.log(enterprises)
//   Пример:
//   addEnterprise("Название нового предприятия")

// Решение 1
console.log('**********Задание 3 - 1**********');

function addEnterprise (enterpriseName) {
  let newEnterprise = []; 
  let searchID;
  enterprises.forEach((enterprise) => {
    newEnterprise.push(enterprise.id);
    searchID = newEnterprise.reduce((sum, curr) =>  sum > curr ? sum : curr , 0);
  })
  enterprises.push({
    id: searchID + 1 ,
    name: enterpriseName,
    departments: []
  })
}
addEnterprise('newEnterpriseName');
console.log(enterprises);

// Решение 2 (не работает как положено...)
console.log('**********Задание 3 - 2**********');

const addEnterprise2 = (newEnterprise) => {
  enterprises.push({
    id: getnewID(enterprises), 
    name: newEnterprise,
    departments: []
  });
   };
   console.log(enterprises);
  
//   4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  
//   Пример:
//   addDepartment(1, "Название нового отдела")

// Решение 1
console.log('**********Задание 4-1**********');

const addDepartment = (id, newDepartment, employeesCountNewDepartnent) => {
  enterprises.forEach(enterprise =>{
    if (enterprise.id === id){
      console.log(enterprise.name);
       enterprise.departments.push({ 
        name: newDepartment,
        employees_count: employeesCountNewDepartnent
      });
       console.log(enterprise.departments);
  } 
})
 }
addDepartment(1, 'Название нового отдела', 14);

// Решение 2

console.log('**********Задание 4-2**********');

const addDepartment1 = (id, name, employees_count) => {
  let isAdded = false;
  enterprises.forEach(enterprise =>{
    if (enterprise.id === id){
      console.log(enterprise.name);
      enterprise.departments.push({ name, employees_count });

      console.log(enterprise.departments);

      isAdded = true;
    }
  });
  if (!isAdded) {
    console.error(`Ошибка при добавлении подразделения: предприятие с номером "${id}" отсутствует!`);
  }
};
addDepartment1(1, 'Название нового отдела', 14);
addDepartment1(20, 'Название нового отдела', 14);
addDepartment1('Предприятие', 'Название нового отдела', 14);

//Решение 3

console.log('**********Задание 4-3**********');

const addDepartment2 = (id, name, employees_count) => {
  let isAdded = false;
  enterprises.some(enterprise =>{
    if (enterprise.id === id) {
      console.log(enterprise.name);
      enterprise.departments.push({ name, employees_count });
      console.log(enterprise.departments);

      isAdded = true;
      return isAdded;
    }
  });
  if (!isAdded) {
    console.error(`Ошибка при добавлении подразделения: предприятие с номером "${id}" отсутствует!`);
  }
};
addDepartment2(1, 'Название нового отдела', 14);
addDepartment2(20, 'Название нового отдела', 14);
addDepartment2('Предприятие', 'Название нового отдела', 14);

// Решение 4
console.log('**********Задание 4-4**********');
const addDepartment3 = (id, name, employees_count) => {
  const index = enterprises.findIndex(enterprise => enterprise.id === id);
  if (index < 0) {
    console.error(`Ошибка при добавлении подразделения: предприятие с номером "${id}" отсутствует!`);
    return false;
  }

  enterprises[index].departments.push({name, employees_count});
  return true;
};
addDepartment3(1, 'Название нового отдела', 14);
addDepartment3(20, 'Название нового отдела', 14);
addDepartment3('Предприятие', 'Название нового отдела', 14);

//   5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
//   Пример:
//   editEnterprise(1, "Новое название предприятия")

// Решение 1

console.log('**********Задание 5-1**********');
  
const editEnterprise = (id, newEnterpriseName) => {
  let isAdded = false;
  enterprises.forEach(enterprise =>{
    if (enterprise.id === id){
      console.log(`Старое название организации - ${enterprise.name}`);
      enterprise.name = newEnterpriseName;
       console.log(`Новое название организации - ${enterprise.name}`);

       isAdded = true;
  }});
  if (!isAdded) {
    console.error(`Ошибка при редактировании предприятия: предприятие с номером "${id}" отсутствует`);
  }
};
editEnterprise(5, 'Новое имя предприятия');
editEnterprise(20, 'Новое имя предприятия');
editEnterprise('Предприятие 1', 'Новое имя предприятия');

// Решение 2

console.log('**********Задание 5-2**********');

const editEnterprise1 = (id, newEnterpriseName) => {
  let isAdded = false;
  enterprises.some(enterprise =>{
    if (enterprise.id === id){
      console.log(`Старое название организации - ${enterprise.name}`);
      enterprise.name = newEnterpriseName;
       console.log(`Новое название организации - ${enterprise.name}`);

       isAdded = true;
       return isAdded;
  }});
  if (!isAdded) {
    console.error(`Ошибка при редактировании предприятия: предприятие с номером "${id}" отсутствует`);
  }
};
editEnterprise1(5, 'Новое имя предприятия');
editEnterprise1(20, 'Новое имя предприятия');
editEnterprise1('Предприятие 1', 'Новое имя предприятия');
  
//   6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
//   Пример:
//   editDepartment(7, "Новое название отдела")

// Решение 1

console.log('**********Задание 6-1**********');

console.log('**********Задание 6-1**********');

const editDepartment = (id, newDepartmentName) =>{
  enterprises.forEach(enterprise =>{
    let isAdded = false;
  enterprise.departments.forEach(department => {
     if (department.id === id){
       console.log(`Старое название подразделения ${department.name}`);
       department.name = newDepartmentName;
       console.log(`Новое название подразделения ${department.name}`);

       isAdded = true;
     }
  });

  if (!isAdded) {
    console.error(`Ошибка при редактировании названия отдела: отдела с номером "${id}" в ${enterprise.name} не найдено`);
  }
 })
};

editDepartment(6, 'Новое название подразделения');
editDepartment(1, 'Новое название подразделения');
editDepartment('Администрация', 'Новое название подразделения');

//  Решение 2
console.log('**********Задание 6-2**********');

const editDepartment1 = (id, newDepartmentName) =>{
  enterprises.some(enterprise =>{
    let isAdded = false;
  enterprise.departments.some(department => {
     if (department.id === id){
       console.log(`Старое название подразделения ${department.name}`);
       department.name = newDepartmentName;
       console.log(`Новое название подразделения ${department.name}`);

       isAdded = true;
       return isAdded;
     }
  });

  if (!isAdded) {
    console.error(`Ошибка при редактировании названия отдела: отдела с номером "${id}" в ${enterprise.name} не найдено`);
  }
 })
};

editDepartment1(6, 'Новое название подразделения');
editDepartment1(1, 'Новое название подразделения');
editDepartment1('Администрация', 'Новое название подразделения');  
  
//   7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
//   Пример:
//   deleteEnterprise(1)

// Решение 1
console.log('**********Задание 7-1**********');

const deleteEnterprise = function(enterpriseNumber) {
  let value = 0
  if (!isNaN(+enterpriseNumber)) {
    enterprises.forEach((ent, id) => {
      if (ent.id == enterpriseNumber) { 
        enterprises.splice(id, 1); 
        value++ 
        console.log(enterprises);
    }
    });
  (value == 0) ? console.log('Предприятия не найдено') : false
  } else {console.log('Введите ID предприятия')}
} 
deleteEnterprise(1);
deleteEnterprise(20);
deleteEnterprise('Предприятие 1');

// Решение 2
console.log('**********Задание 7-2**********');

const deleteEnterprises1 = (id) => { 
  let isAdded = false;

  enterprises.forEach((enterprise, number) =>{
     if(enterprise.id === id){
      console.log(`Удаляется предприятие`, enterprises[number]);
      enterprises.splice(number, 1);
      console.log(`Измененный объект`, enterprises);

      isAdded = true;
     }
   });
   
   if (!isAdded) {
      console.error(`Ошибка при удалении предприятия: предприятия с номером '${id}' не найдено`)
   }
 }

 deleteEnterprises1(1);
 deleteEnterprises1(20);
 deleteEnterprises1('Предприятие 1');

//  Решение 3

console.log('**********Задание 7-3**********');

const deleteEnterprises2 = (id) => { 
  let isAdded = false;

  enterprises.some((enterprise, number) =>{
     if(enterprise.id === id){
      console.log(`Удаляется предприятие`, enterprises[number]);
      enterprises.splice(number, 1);
      console.log(`Измененный объект`, enterprises);

      isAdded = true;
      return isAdded;
     }
   });
   
   if (!isAdded) {
      console.error(`Ошибка при удалении предприятия: предприятия с номером '${id}' не найдено`)
   }
 }

 deleteEnterprises2(1);
 deleteEnterprises2(20);
 deleteEnterprises2('Предприятие 1');

//   8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
//   Пример:
//   deleteDepartment(3)

console.log('**********Задание 8-1**********');

const deleteDepartment = (id) => { 
  let isAdded = false;

  enterprises.forEach(enterprise =>{
    enterprise.departments.forEach((department, index) =>{
     if(department.id===id && department.employees_count===0){
      console.log(`Удален отдел c номером ${department.id} из предприятия ${enterprise.name}`);
      enterprise.departments.splice(index, 1);
      isAdded = true;
     } 
    });

    if (!isAdded) {
      console.error(`Ошибка при удалении отдела: отдел с номером '${id} в ${enterprise.name} не найден'`);
    }
  })  
 }

deleteDepartment(10);
deleteDepartment(100);
deleteDepartment('Администрация');

// Решение 2

console.log('**********Задание 8-2**********');

const deleteDepartment1 = (id) => { 
  let isAdded = false;

  enterprises.some(enterprise =>{
    enterprise.departments.forEach((department, index) =>{
     if(department.id===id && department.employees_count===0){
      console.log(`Удален отдел c номером ${department.id} из предприятия ${enterprise.name}`);
      enterprise.departments.splice(index, 1);
      isAdded = true;
      return isAdded;
     } 
    });

    if (!isAdded) {
      console.error(`Ошибка при удалении отдела: отдел с номером '${id} в ${enterprise.name} не найден'`);
    }
  })  
 }

deleteDepartment1(10);
deleteDepartment1(100);
deleteDepartment1('Администрация');
  
//   9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  
//   Пример:
//   moveEmployees(2, 3)

console.log('**********Задание 9**********');
const moveEmployees = (id1, id2) => { 
  let count = 0;
 enterprises.forEach(enterprise =>{
   enterprise.departments.forEach(department =>{
    if(department.id==id1){
     count = department.employees_count;
     console.log(count);
    } 
   })
   enterprise.departments.forEach(department =>{
     if(department.id==id2){
      department.employees_count+= count;
      console.log(department.employees_count);
     } 
    })
 })  
}

moveEmployees(9,8);
