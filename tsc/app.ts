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

// class User {
//     name: string;
//     age: number;
    
// }




let num: number = 24;
console.log(num) // 24
let str: string = 'Hello World';
console.log(str) // Hello World
let bool: boolean = true;
console.log(bool) // true

let num2 = 34;
console.log(num2)


let firstName: string = "Tom";
let age: number = 20;
let info: string = `Name:${firstName} Age:${age}`;
console.log(info)

const num1: bigint = BigInt(100);
console.log(num1)

function add(a, b) {
    return a + b;
}

let result = add(45, 35);
console.log(result)

function numbers(a:number, b:number) {
    let result = a + b
    console.log(result)
}

numbers(25, 25);
numbers(45, 45);
// console.log(numbers)


function numbers1(a:number, b:number): void {
    let result = a + b;
    console.log(result)
}
numbers1(1,2)
numbers1(2,2)

function add2(a, b) {
    return a + b
}
let result2 = add(12,13)
console.log(result2)










