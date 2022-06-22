// class User{
//     name : string;
//     constructor(_name:string){
//         this.name = _name;
//     }
// }
// const tom : User = new User("Том1");
// const header = this.document.getElementById("header");
// header.innerHTML = "Привет " + tom.name;
// var x = " Hello";
// var x = " World";
// console.log(x + x);
// World World
// let a = "World";
// let a = "Hello"; // Ошибка о том что переменная уже  обявлена  
// let s = "vb";
// s = "as";
// console.log(s)
// aS
// const d = 'as';
// d = 'df' // const нельзя менять 
// let x = 10;
// {
//     let x = 25;
//     console.log(x); // 25
// }
// console.log(x); // 10
// Здесь определены две переменных с одним и тем же именем. 
// Но ошибки нет, поскольку они определены в разных областях видимости. 
// Переменная let x = 10 определена в глобальной области видимости. 
// А переменная let x = 25; определена во вложенном блоке кода - 
// в локальной области видимости. И она скрывает внешнюю глобальную переменную.
// let x = 10;
// {
//     let x = 20;
//     {
//         let x = 30;
//         console.log(x);
//     }
//     console.log(x);
// }
// console.log(x);
// let x = 10;
// console.log(x); // 10
// var x = 20;  // ! Ошибка
// console.log(x); // Но консоль выведет 20
// const t = 50;
// t = 356; // ! Ошибка
// console.log(t); // Но консоль выведет 356
// CLASS
// Класс представляет шаблон 
// для создания объектов и инкапсулирует функциональность, 
// которую должен иметь объект. 
// Класс определяет состояние и поведение, которыми обладает объект
// Есть шаблон с свойствами 
// class User {
//     name: string;
//     age: number;
// }
// // Создаем модель
// let tom = new User();
// tom.name = "Thomas";
// tom.age = 20;
// console.log(`name: ${tom.name} age: ${tom.age}`)
// Методы 
// Классы также могут определять поведение - некоторые действия, 
// которые должны выполнять объекты этого класса. 
// Для этого внутри класса определяются функции, 
// которые называются методами.
// class User {
//     name: string;
//     age: number;
//     print(){
//         console.log(`name: ${this.name} age: ${this.age}`);
//     }
//     toString(): string{
//         return `${this.name}: ${this.name}`;
//     }
// }
// let tom = new User(); // создаем модель
// tom.name = "Thomas"; // присвоем значения
// tom.age = 20; // присвоем значения
// tom.print(); // выводим в консоль
// console.log(tom.toString()); // выводим в консоль
// name: Thomas age: 20
// app.js:85 Thomas: Thomas
// Конструкторы
// Кроме обычных методов классы имеют специальные функции - конструкторы, 
// которые определяются с помощью ключевого слова constructor. 
// Конструкторы выполняют начальную инициализацию объекта.
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
