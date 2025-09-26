// Скрипт для зміни кількості місць (раз на 40 секунд)
let count = 3;

function updateCount() {
  if (count > 0) {
    count -= 1;
    document.getElementById('spot-count').textContent = count;
  }
}

setInterval(updateCount, 40000); // кожні 40 секунд



// Бургер
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-menu');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });



  let counter = 44; // Начальное значение счетчика
const counterElement = document.getElementById('counter');

// Функция для обновления счетчика
function updateCounter() {
  counter++;
  counterElement.textContent = counter;
}

// Увеличение счетчика каждые 20 секунд
setInterval(updateCounter, 20000); // 20000 миллисекунд = 20 секунд

// Обработчик клика на кнопку для увеличения счетчика
document.getElementById('increase-btn').addEventListener('click', updateCounter);





 