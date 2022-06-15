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

// ______________________________
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

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
// concat соединяет два массива
console.log(array3);

var a = ['Ветер', 'Дождь', 'Огонь'];
var myVar1 = a.join();      // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
var myVar2 = a.join(', ');  // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
var myVar3 = a.join(' + '); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
var myVar4 = a.join('');    // присвоит 'ВетерДождьОгонь' переменной myVar4

console.log(myVar1)
console.log(myVar2)
console.log(myVar3)
console.log(myVar4)