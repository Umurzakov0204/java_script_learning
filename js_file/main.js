const fun = (radius) => {
    return 4 * 3.14 * radius * radius;
}
console.log(fun(5))

// _____________________________
const abc = (num) => {
    if (num > 0) {
        return num;
    } else if (num < 0) {
        return -num;
    } else {
        return 0;
    }
}
console.log(abc())

// PREDICATES => ПРЕДИКАТ
// === Оператор тождественности также сравнивает два ЗНАЕЧЕНИЯ и их ТИПЫ, и если они равны, возвращает true, иначе возвращает false
// == Оператор равенства сравнивает два ЗНАЧЕНИЯ, и если они равны, возвращает true, иначе возвращает false
// !== Сравнивает два ЗНАЕЧЕНИЯ и их ТИПЫ, и если они НЕ РАВНЫ, возвращает true, иначе возвращает false
// < Сравнивает два ЗНАЕЧЕНИЯ, и если первое меньше второго, то возвращает true, иначе возвращает false
// > Сравнивает два ЗНАЕЧЕНИЯ, и если первое больше второго, то возвращает true, иначе возвращает false
// <= Сравнивает два ЗНАЕЧЕНИЯ, и если первое меньше или равно второму, то возвращает true, иначе возвращает false
// >= Сравнивает два значения, и если первое больше или равно второму, то возвращает true, иначе возвращает false
console.log(512 === 512) //true
console.log(512 === 888) //false
console.log(512 !== 512) //false
console.log(512 > 500) //true
console.log(512 < -30) //false
console.log(512 >= 512) //true
console.log(512 >= 777) //false
console.log(512 <= 777) // true

<<<<<<< HEAD
// рекурсия
// const factorial = (n) => {
//     if (n === 1 ) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }

const answer = factorial(3)
console.log(answer)
=======
// ____ Arrays Methods
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
// concat соединяет два массива
console.log(array3);


let a = ['Ветер', 'Дождь', 'Огонь'];
let myVar1 = a.join();      // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
let myVar2 = a.join(', ');  // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
let myVar3 = a.join(' + '); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
let myVar4 = a.join('');    // присвоит 'ВетерДождьОгонь' переменной myVar4
console.log(myVar1)
console.log(myVar2)
console.log(myVar3)
console.log(myVar4)
//                 0       1        2        3         4
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2))
console.log(animals.slice(1,4))
console.log(animals.slice(4))
console.log(animals.slice(0,1))

//___index____0__1__2__3__4___5_
let arrays = [2, 5, 6, 7, 8, 12]
console.log(arrays.indexOf(6));
console.log(arrays.indexOf(5));
console.log(arrays.indexOf(12))


let arra = []


console.log('42\n'.length == 4)
console.log(".length == null")


function ourterFun(i) {
    let a = 3;
    function innerFun(i) {
        console.log(i + j +(++a));
    }
}
innerFun(10);

ourterFun(2)
>>>>>>> 16658fc2229103819357f8dacd007b61e4ecc27f
