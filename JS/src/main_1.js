//let user = new Object();

/*let user = {
    name: "Vlad",
    age: 27,
};

console.log(user.name);
console.log(user["age"]);

user.isAdmin = true
delete user.age

console.log(user);
*/

/*
let fruit = prompt("Введите свой любимый фрукт:");

let user  = {
    name: "Svetlana",
    surname: "Kobyakova",
    age: 25,
    heigt: 174,
    hair: "blond",
    [fruit]: "favorite",
}

console.log(user.name);
console.log(user["age"]);

user.isAdmin = true;
delete user.age;

console.log(user);
*/

/*
let rectangle = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
}

function set_rectangle(o) {
    A = prompt("Введите координаты первой точки (через запятую):");
    o.A = A;
    B = prompt("Введите координаты второй точки (через запятую):");
    o.B = B;
    C = prompt("Введите координаты третьей точки (через запятую):");
    o.C = C;
    D = prompt("Введите координаты четвертой точки (через запятую):");
    o.D = D;
}

function rectangleInfo(o){
    alert(`Точка А: (${o.A})\nТочка В:(${o.B})\nТочка C:(${o.C})\nТочка D:(${o.D})`);
}
*/

let rectangle = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
}

function set_rectangle(o) {
    A = prompt("Введите координаты первой точки (через запятую):");
    o.A = A;
    B = prompt("Введите координаты второй точки (через запятую):");
    o.B = B;
    C = prompt("Введите координаты третьей точки (через запятую):");
    o.C = C;
    D = prompt("Введите координаты четвертой точки (через запятую):");
    o.D = D;
    }

    function rectangleInfo(o){
        alert(`Точка А: (${o.A})\nТочка В:(${o.B})\nТочка C:(${o.C})\nТочка D:(${o.D})`);
    }

    function getWidth(o){
        alert (`Ширина прямоугольника: ${Number(o.B[0]) - Number(o.A[0])}`);
    }

    function getHeigth(o){
        alert (`Высота прямоугольника: ${Number(o.A[2]) - Number(o.D[2])}`);
    }

    function getArea(o){
        alert (
            `Площадь равна: ${
                (Number(o.B[0]) - Number(o.A[0])) * (Number(o.A[2]) - Number(o.D[2]))
            }`
        );
    }

    function getPerimeter(o){
        alert (
            `Периметр равен: ${
                (Number(o.B[0]) - Number(o.A[0])) * 2 +
                (Number(o.A[2]) - Number(o.D[2]) * 2)
            }`
        );
    }