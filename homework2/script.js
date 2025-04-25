
// task 1

// let x = 1;
// let y = 2;

// let res1 = (x + y) * 4 + "";
// console.log(res1); 
// console.log(typeof res1);

// let res2 = x <= y + "2";
// let res21 = res2.toString();
// console.log(res2);
// console.log(typeof res21);

// let res3 = x <= y;
// console.log(res3);
// console.log(typeof res3);


// let res4 = x - "banan";

// if (isNaN(res4)) {
//   console.log("Number");
// } else {
//   console.log(res4);
// }

// console.log(typeof res4);



// task 2

// let x = Number (prompt("Введи число"));
// console.log(x);

// if (Number.isNaN(x)) {
//     console.log("Це не число!");
//   } else {
//     if (x % 2 === 0 ) {
//         console.log("Парне");
//       } else {
//         console.log("Непарне");
//       }
    
//     if (x > 0){
//         console.log("Додатнє");
//     }  else {
//         console.log("Від'ємне");
//     }

//     if (x % 7 === 0){
//         console.log("Кратнє 7");
//     }  else {
//         console.log("Не кратнє 7");
//     }
  
//   }

// Task 3

// let x = [];

// x[0] = 42;           
// x[1] = "Привіт";     
// x[2] = false;
// x[3] = null;         
// console.log("Кількість елементів у масиві:", x.length);

// let userInput = prompt("Введіть будь-яке значення:");
// x[4] = userInput;

// console.log("П'ятий елемент масиву:", x[4]);

// x.shift(); 

// console.log("Масив після видалення першого елемента:", x); 


// Task 4
// let cities = ["Rome", "Lviv", "Warsaw"];
// let result = cities.join("*");

// console.log(result);

// task 5

// let isAdilt = prompt("Скільки вам років?")
//    if (isAdilt >= 18) {
//     console.log("Ви досягли повнолітннього віку")
//    } else{
//     console.log("Ви ще надто молоді")
//    }


// task 6




// task 7

// let currentHour = new Date().getHours(); // Отримуємо поточну годину

// if (currentHour >= 23 || currentHour < 5) {
//     console.log("Доброї ночі");
// } else if (currentHour >= 5 && currentHour < 11) {
//     console.log("Доброго ранку");
// } else if (currentHour >= 11 && currentHour < 17) {
//     console.log("Доброго дня");
// } else if (currentHour >= 17 && currentHour < 23) {
//     console.log("Доброго вечора");}