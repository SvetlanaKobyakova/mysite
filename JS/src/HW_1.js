
let ans;
ans = prompt("Как твое имя?");
alert("Привет," + ans);

const year = 2024;
let x = Number(prompt("Введите Ваш год рождения:"));
let y;
y = year - x;
alert("Вам сейчас:" + y);

let x = Number(prompt("Введите длину стороны квадрата:"));
let y;
y = x * 4;
alert("Периметр квадрата равен:" + y);

const k = 3.14;
let x = Number(prompt("Введите радиус круга:"));
let y;
y = k * x ** 2;
alert("Площадь круга равна:" + y);

let x = Number(prompt("Введите расстояние между городами:"));
let y = Number(prompt("Введите время в пути:"));
z = x / y;
alert("Чтобы успеть вовремя Вы должны двигаться со скоростью:" + z);

const k = 0.8999;
let x = Number(prompt("Введите количество Долларов:"));
y = k * x;
alert("Колличество Евро:" + y);

const k = 820 / 1024;
let x = Number(prompt("Введите объем флэшки:"));
z=x/k;
alert("На вашу карту памяти поместиться:" + z);

let x = Number(prompt("Введите сумму денег:"));
let y = Number(prompt("Введите цену шоколадки:"));
z = x / y - (x / y % 1);
alert("Вы можете купить шоколадок:" + z);
a = x - y * z;
alert("У Вас осталась сдача:" + a);


let input = prompt("Введите трехзначное число: ");
let last = input.slice(2);
let res = last + input.slice(0, 2);
alert("Ваше число теперь: " + res);


let x = Number(prompt("Введите целое число:"));
if(x%2==0)
    x = "четное";
else
    x = "нечетное";
alert("Ваше число:" + x);
