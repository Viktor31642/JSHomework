
// Task 1

// const numbers = [2, 3, 4, 5];
// let product = 1;
// let i = 0;

// while (i < numbers.length) {
//   product *= numbers[i];
//   i++;
// }

// console.log('Добуток:', product);


// Task 2

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + ' is even');
//     } else {
//       console.log(i + ' is odd');
//     }
//   }

// Task 3

// function randArray(k) {
//     const arr = [];
//     for (let i = 0; i < k; i++) {
//       const randomNumber = Math.floor(Math.random() * 500) + 1;
//       arr.push(randomNumber);
//     }
//     return arr;
//   }
  
//   console.log(randArray(5));
  

//Task 4

// function raiseToDegree(a, b) {
//     if (Number.isInteger(a) && Number.isInteger(b)) {
//       return a ** b;
//     } else {
//       return 'Помилка: введіть тільки цілі числа';
//     }
//   }
  
//   // Запитуємо числа у користувача:
//   const a = parseInt(prompt('Введіть ціле число a:'), 10);
//   const b = parseInt(prompt('Введіть ціле число b:'), 10);
  
//   // Викликаємо функцію і виводимо результат:
//   const result = raiseToDegree(a, b);
//   console.log(result);
  

// Task 5

// function findMin() {
//     let min = arguments[0];
  
//     for (let i = 1; i < arguments.length; i++) {
//       if (arguments[i] < min) {
//         min = arguments[i];
//       }
//     }
  
//     return min;
//   }
  
//   // Приклад використання:
//   console.log(findMin(12, 14, 4, -4, 0.2));


// Task 6


// function findUnique(arr) {
//     const uniqueElements = new Set(arr);
//     return uniqueElements.size === arr.length;
//   }
  
//   // Приклади використання:
//   console.log(findUnique([1, 2, 3, 5, 3]));
//   console.log(findUnique([1, 2, 3, 5, 11]));


// Task 7


// function lastElem(arr, count) {
//     if (count === undefined) {
//       return arr[arr.length - 1];
//     } else {
//       return arr.slice(-count);
//     }
//   }
  
//   console.log(lastElem([3, 4, 10, -5]));
//   console.log(lastElem([3, 4, 10, -5], 2));
//   console.log(lastElem([3, 4, 10, -5], 8));



// Task 8

// function capitalizeWords(str) {
//     return str
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   }
  
//   console.log(capitalizeWords('i love java script')); 
  
  
  
  