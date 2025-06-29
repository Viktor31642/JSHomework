// // task 1

// function getPromise(message, delay) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(message), delay);
//     });
// }

// // Приклад:
// getPromise("test promise", 2000).then(function(data) {
//     console.log(data); // Через 2 сек: "test promise"
// });


// // Task 2

// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//         if (arr.every(item => typeof item === 'number')) {
//             const product = arr.reduce((acc, num) => acc * num, 1);
//             resolve(product);
//         } else {
//             resolve("Error! Incorrect array!");
//         }
//     });
// }

// // Приклад:
// calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"


// // Task 3

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// function showNumbers() {
//     let promise = Promise.resolve(); // початковий пустий Promise

//     for (let i = 0; i <= 10; i++) {
//         const randomTime = Math.floor(Math.random() * 3000); // до 3 сек
//         promise = promise.then(() => delay(i, randomTime)).then(result => {
//             console.log(result);
//         });
//     }
// }

// showNumbers();


// Task 4

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// async function showNumbers() {
//     for (let i = 0; i <= 10; i++) {
//         const randomTime = Math.floor(Math.random() * 3000);
//         const result = await delay(i, randomTime);
//         console.log(result);
//     }
// }

// showNumbers();
