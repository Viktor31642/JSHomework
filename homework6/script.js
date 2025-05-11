    
    // Task 1
    
    // Спосіб 1: Через getElementById
    // document.getElementById('test').innerText = 'Last';

    // Спосіб 2: Через querySelector
    // document.querySelector('#test').innerHTML = 'Last';


    // Task 2

    // const img = document.querySelector('.image');
    // img.src = 'cat.jpg';
    // alert(img.outerHTML); // Показати оновлений тег <img>

    // Task 3

    //  const paragraphs = document.querySelectorAll('#text p');
    //   paragraphs.forEach((p, index) => {
    //   console.log(`Selector text ${index}: ${p.textContent}`);
    //   });


    // Task 4

    // const items = document.querySelectorAll('#list li');
    // alert(
    //   `${items[0].textContent}, ${items[4].textContent}, ${items[1].textContent}, ${items[3].textContent}, ${items[2].textContent}`
    // );

// Task 5

// Зелений фон для h1 + жирний + великий
//   const header = document.querySelector('h1');
//   header.style.backgroundColor = 'lightgreen';
//   header.style.fontWeight = 'bold';
//   header.style.fontSize = '2.5rem';

//   // Стилізація абзаців всередині myDiv
//   const paragraphs = document.querySelectorAll('#myDiv p');
//   paragraphs[0].style.fontWeight = 'bold'; // First paragraph
//   paragraphs[1].style.color = 'red';       // Second paragraph
//   paragraphs[2].style.textDecoration = 'underline'; // Third paragraph
//   paragraphs[3].style.fontStyle = 'italic';         // Fourth paragraph

//   // Горизонтальне розміщення елементів списку
//   const listItems = document.querySelectorAll('#myList li');
//   listItems.forEach(li => {
//     li.style.display = 'inline';
//     li.style.marginRight = '5px';
//   });

// const list = document.getElementById('myList');
//   const combinedText = Array.from(list.children)
//     .map(li => li.textContent)
//     .join(''); // НЕ додаємо пробіли!

//   list.innerHTML = `<li>${combinedText}</li>`;


// Task 6

//  // 1. Введення користувачем значень
//     const message1 = prompt("Введіть перше повідомлення:");
//     const message2 = prompt("Введіть друге повідомлення:");

//     // Запис у поля
//     const input1 = document.getElementById("input1");
//     const input2 = document.getElementById("input2");
//     input1.value = message1;
//     input2.value = message2;

//     // 2. Обмін значеннями місцями
//     const temp = input1.value;
//     input1.value = input2.value;
//     input2.value = temp;


//  Task 7


    // // Створюємо <main> з класами
    // const main = document.createElement("main");
    // main.className = "mainClass check item";

    // // Створюємо <div> з id
    // const div = document.createElement("div");
    // div.id = "myDiv";

    // // Створюємо <p> з текстом
    // const paragraph = document.createElement("p");
    // paragraph.textContent = "First paragraph";

    // // Формуємо структуру: <main> > <div> > <p>
    // div.appendChild(paragraph);
    // main.appendChild(div);
    // document.body.appendChild(main);

  

