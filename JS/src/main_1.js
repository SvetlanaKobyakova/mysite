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
*/

/*
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
*/

/*
$(document).ready(function () {
  $("button").click(function () {
    $("p").toggle();
  });
});
*/

/*
$(document).ready(function () {
  $("p").text("Текст установленный из jQuery");
  $("p").html("<h3>Текст установленный из jQuery</h3>");
  $("input").val("Значение поля, установленное из jQuery");
  $("p").attr("style","font-size: 24px;");

    $("p").append("Hello") - добавление значения в конец тега;
    $("p").prepend(Oh, man..) - добавление значения в начало тега;
    $("p").after("div");
    $("p").before("div");

  $("p").remove() - удаление дочернего элемента (или указанного в методе);
  $("p").empty() - удаление всех дочерних элементов;
});
*/

/*
$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        type: "GET",
        success: function(data) {
            for (key in data) {
                $("#ajaxPicture").append(key + ":" + data[key] + "<br>");
            }
        },
        error: function(error) {
            $("ajaxPicture").text(error);
        },
    });
});
*/

