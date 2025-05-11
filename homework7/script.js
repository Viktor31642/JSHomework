
// Task 1

//   // Відкрити нове вікно 300x300
//   const myWindow = window.open('', '', 'width=300,height=300');

//   // Затримка 2 секунди → зміна розміру до 500x500
//   setTimeout(() => {
//     myWindow.resizeTo(500, 500);
//   }, 2000);

//   // Ще через 2 секунди → переміщення у координати (200, 200)
//   setTimeout(() => {
//     myWindow.moveTo(200, 200);
//   }, 4000);

//   // Ще через 2 секунди → закриття вікна
//   setTimeout(() => {
//     myWindow.close();
//   }, 6000);

// Task 2

// function changeCSS() {
//     const p = document.getElementById('text');
//     p.style.color = 'orange';
//     p.style.fontSize = '20px';
//     p.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
//   }

// Task 3

//    window.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('btn1').addEventListener('click', () => {
//     document.body.style.backgroundColor = 'blue';
//   });

//   document.getElementById('btn2').addEventListener('dblclick', () => {
//     document.body.style.backgroundColor = 'pink';
//   });

//   const btn3 = document.getElementById('btn3');
//   btn3.addEventListener('mousedown', () => {
//     document.body.style.backgroundColor = 'brown';
//   });
//   btn3.addEventListener('mouseup', () => {
//     document.body.style.backgroundColor = 'white';
//   });

//   const link = document.getElementById('link');
//   link.addEventListener('mouseover', () => {
//     document.body.style.backgroundColor = 'yellow';
//   });
//   link.addEventListener('mouseout', () => {
//     document.body.style.backgroundColor = 'white';
//   });
// });


// Task 4

// document.getElementById('deleteBtn').addEventListener('click', () => {
//   const select = document.getElementById('nameSelect');
//   const selectedIndex = select.selectedIndex;

//   if (selectedIndex !== -1) {
//     select.remove(selectedIndex);
//   }
// });

// Task 5

// const button = document.getElementById('myButton');
//   const messageDiv = document.getElementById('message');

//   button.addEventListener('mouseover', function() {
//     messageDiv.textContent = 'Mouse on me!';
//   });

//   button.addEventListener('mouseout', function() {
//     messageDiv.textContent = 'Mouse is not on me!';
//   });

//   button.addEventListener('click', function() {
//     messageDiv.textContent = 'I was pressed!';
//   });


// Task 6

//   const dimensionsDiv = document.getElementById('dimensions');

//   function updateDimensions() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     dimensionsDiv.textContent = `Width: ${width}, Height: ${height}`;
//   }

 
//   updateDimensions();

  
//   window.addEventListener('resize', updateDimensions);

// Task 7

// const countrySelect = document.getElementById('country');
//   const citySelect = document.getElementById('city');

//   const citiesByCountry = {
//     usa: ['New-York', 'Washington', 'Boston', 'Chicago'],
//     germany: ['Berlin', 'Hamburg', 'Munich', 'Cologne'],
//     ukraine: ['Kyiv', 'Lviv', 'Odesa', 'Kharkiv']
//   };

//   countrySelect.addEventListener('change', function() {
//     const selectedCountry = this.value;
//     citySelect.innerHTML = ''; // Clear previous options

//     if (selectedCountry) {
//       const cities = citiesByCountry[selectedCountry];
//       cities.forEach(city => {
//         const option = document.createElement('option');
//         option.value = city.toLowerCase().replace(' ', '-'); // Create a value
//         option.textContent = city;
//         citySelect.appendChild(option);
//       });
//     } else {
//       const defaultOption = document.createElement('option');
//       defaultOption.value = '';
//       defaultOption.textContent = '-- Please select a country first --';
//       citySelect.appendChild(defaultOption);
//     }
//   });