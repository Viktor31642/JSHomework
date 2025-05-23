// Task 1
// function upperCase(str) {
//   console.log("Text to check:", str); // показуємо, що саме перевіряємо

//   if (!str) {
//     console.log("Empty string");
//     return;
//   }

//   if (str[0] === str[0].toUpperCase()) {
//     console.log("String's starts with uppercase character");
//   } else {
//     console.log("String's not starts with uppercase character");
//   }
// }

// // Приклади
// upperCase('regexp');   
// upperCase('RegExp');   


// Task 2

// function checkEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }

// console.log(checkEmail("Qmail2@gmail.com")); // true


// Task 3

// const str = "cdbBdbsbz";
// const regex = /d(b+)(d)/gi;
// const result = str.match(regex);

// console.log(result); // ["dbBd"]

// // Запам’ятати b і d:
// const groups = [...str.matchAll(/d(b+)(d)/gi)];
// groups.forEach(match => {
//   console.log(match[0]); // повна відповідність
//   console.log(match[1]); // b+
//   console.log(match[2]); // остання d
// });


// Task 4


// const str = "Java Script";
// const result = str.replace(/(\w+)\s+(\w+)/, "$2, $1");

// console.log(result);

// Task 5

// function validateCardNumber(number) {
//   const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//   return regex.test(number);
// }

// console.log(validateCardNumber("9999-9999-9999-9999"));
// console.log(validateCardNumber("9999999999999999"));   

// Task 6

// function checkEmail(email) {
//   const regex = /^[A-Za-z0-9](?!.*--)[A-Za-z0-9_-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   if (regex.test(email)) {
//     console.log("Email is correct!");
//   } else {
//     console.log("Email is not correct!");
//   }
// }

// checkEmail('my_mail@gmail.com'); 
// checkEmail('#my_mail@gmail.com'); 
// checkEmail('my_ma--il@gmail.com'); 


// Task 7

function checkLogin(login) {
  const loginRegex = /^[A-Za-z][A-Za-z0-9\.]{1,9}$/;
  const numberRegex = /\d+(\.\d+)?/g;

  const isValid = loginRegex.test(login);
  const numbers = login.match(numberRegex);

  console.log(isValid);
  console.log(numbers);
}

checkLogin('ee1.1ret3'); 
checkLogin('ee1*1ret3'); 
