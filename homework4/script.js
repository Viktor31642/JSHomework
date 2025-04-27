// Task 1


// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
//       throw new Error('Параметри мають бути валідними числами!');
//     }
//     return width * height;
//   }
  
//   try {
//     const widthInput = prompt('Введіть ширину прямокутника:');
//     const heightInput = prompt('Введіть висоту прямокутника:');
  
//     const width = Number(widthInput);
//     const height = Number(heightInput);
  
//     const area = calcRectangleArea(width, height);
//     alert('Площа прямокутника: ' + area);
//   } catch (error) {
//     alert('Помилка: ' + error.message);
//   }
  


// Task 2 

// function checkAge() {
//     try {
//       const userAgeInput = prompt('Введіть ваш вік:');
      
//       if (userAgeInput === null || userAgeInput.trim() === '') {
//         throw new Error('The field is empty! Please enter your age');
//       }
  
//       const userAge = Number(userAgeInput);
  
//       if (isNaN(userAge)) {
//         throw new Error('You entered not a number!');
//       }
  
//       if (userAge < 14) {
//         throw new Error('You are too young!');
//       }
  
//       alert('Доступ дозволено. Насолоджуйтесь переглядом фільму!');
//     } catch (error) {
//       alert(`Назва помилки: ${error.name}\nОпис помилки: ${error.message}`);
//     }
//   }
  
//   checkAge();



// Task 3




// class MonthException {
//     constructor(message) {
//       this.name = 'MonthException';
//       this.message = message;
//     }
//   }
  
//   function showMonthName(month) {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
  
//     if (month < 1 || month > 12 || isNaN(month)) {
//       throw new MonthException('Incorrect month number');
//     }
  
//     return months[month - 1];
//   }
  

//   try {
//     console.log(showMonthName(5));  // Виведе May
//     console.log(showMonthName(14)); // Викине помилку
//   } catch (error) {
//     console.error(`${error.name} ${error.message}`);
//   }
  


// Task 4

// function showUser(id) {
//     if (id < 0) {
//       throw new Error(`ID must not be negative: ${id}`);
//     }
//     return { id: id };
//   }
  
//   function showUsers(ids) {
//     const result = [];
  
//     for (const id of ids) {
//       try {
//         const user = showUser(id);
//         result.push(user);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
  
//     return result;
//   }
  

//   const users = showUsers([7, -12, 44, 22]);
//   console.log(users);
  