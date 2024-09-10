//alert("Hello from JavaScript");
//confirm("Согласны. узнали?");
/*
underfined - неинициализированные значения
null - флаг отсутствия значений (либо нулевое значение)
bool (Boolean) - логический тип данных, true или false
string - последовательность символов (или символ), объедененные в структуру
number - число (любого вида), NaN (Not-a-Number), Infinity (-Infinity), +0 (-0)
object - представление объекта языка JavaScript

Декремент:
++х или х++ <=> x+1

Инкремент:
--х или х-- <=> х-1
*/

/*let ans;
ans = prompt("Введите код операции:");
if (ans == '6453'){
    alert("Молодец! Правильный ответ");
} else {
    alert("Код неверный! Не молодец ;с");
}*/

/*
if (condition){
    statement;
}
else{
    other statement;
}
*/

/*let x, y, z;
x = prompt("Введите первое число:");
x = Number(x);
y = prompt("Введите второе число:");
y = Number(y);
z = (x + y)/2;
alert("Среднее арифметическое ваших чисел" + z);
*/

/*const mile = 0.621371;
let x = Number(prompt("Введите значение в километрах:"));
alert("Количество километров в милях" + x * mile);
*/

/*let input = prompt("Введите пятизначное число: ");
//   0   1   2   3   4
// ['1','2','3','4','5'] = '12345';
let last = input.slice(4);
let res = last + input.slice(0, 4);
alert("Ваше число теперь: " + res);
*/

let x = Number(prompt("Введите первое число: "));
let y = Number(prompt("Введите второе число: "));
alert("Сумма двух чисел: " + (x + y));
alert("Разница двух чисел: " + (x - y));
alert("Произведение двух чисел: " + (x * y));
alert("Деление двух чисел: " + (x / y));