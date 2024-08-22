
// Получаем кнопку с классом 'scooter_extend' и добавляем обработчик события
const btnExtend = document.getElementsByClassName('scooter_extend')[0];
btnExtend.addEventListener('click', changePriceTo139);

// Функция для изменения цены на 139$
function changePriceTo139() {
    const priceElement = document.getElementsByClassName('extend_price2')[0];
    priceElement.innerHTML = '139$';
}

// Получаем кнопку с классом 'scooter_extend1' и добавляем обработчик события
const btnExtend1 = document.getElementsByClassName('scooter_extend1')[0];
btnExtend1.addEventListener('click', changePriceTo800);

// Функция для изменения цены на 800$
function changePriceTo800() {
    const priceElement = document.getElementsByClassName('extend_price2')[0];
    priceElement.innerHTML = '209$';
}

// Получаем кнопку с классом 'scooter_extend1' и добавляем обработчик события
const btnExtend2 = document.getElementsByClassName('scooter_extend3')[0];
btnExtend2.addEventListener('click', changePriceTo900);

// Функция для изменения цены на 800$
function changePriceTo900() {
    const priceElement = document.getElementsByClassName('extend_price2')[0];
    priceElement.innerHTML = '279$';
}


