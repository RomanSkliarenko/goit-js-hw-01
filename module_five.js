'use strict';
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let countrie = '';
let price;

let select = prompt('Введите название страны, куда нужна доставка');
if(select !== null) {
  select = select.toLowerCase();
  switch(select){
    case 'китай' :
    countrie = 'Китай'; 
    price = '100 кредитов';
    break;
    case 'чили' :
    countrie = 'Чили'; 
    price = '250 кредитов';
    break;
    case 'австралия' :
    countrie = 'Австралия'; 
    price = '170 кредитов';
    break;
    case 'индия' :
    countrie = 'Индия'; 
    price = '80 кредитов';
    break;
    case 'ямайка' :
    countrie = 'Ямайка'; 
    price = '120 кредитов';
    break;
   
    default : alert('В вашей стране доставка не доступна')
  };
}
price ? alert(`Доставка в ${countrie} будет стоить ${price} кредитов`) : '';
