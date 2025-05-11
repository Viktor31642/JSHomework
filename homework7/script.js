
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

   window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn1').addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
  });

  document.getElementById('btn2').addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink';
  });

  const btn3 = document.getElementById('btn3');
  btn3.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown';
  });
  btn3.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = 'white';
  });

  const link = document.getElementById('link');
  link.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow';
  });
  link.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
  });
});