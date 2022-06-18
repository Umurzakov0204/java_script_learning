const arra = ['a','b','c','d'];
const arra2 = ['e','f','g'];

const arra3 = arra.concat(arra2);
// concat => контакт


const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join())
console.log(elements.join(''))
console.log(elements.join('-'))
// join => присоединиться

//_____ id => _____0_______1________2_______3_________4______
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(3,4));
// slice => ломтик

const array = ['one', 'two', 'three'];
console.log('arrays element:', array)
const reversed = array.reverse();
console.log('arrays element:',reversed);
// reverse => обратный

let things = ['slova', 'Slova', '1 Slova', '0 slova'];
console.log(things.sort());
// sort => сортировать


let dish = ['fish', 'meat', 'batton', 'e.tc']
console.log('My dishes: ' + dish);
let shifted = dish.shift();
console.log('Удален этот элемент: ' + shifted)
// shift => сдвиг
// myFish до: ангел,клоун,мандарин,хирург
// myFish после: клоун,мандарин,хирург
// Удалён этот элемент: ангел

let sports = ['footbal', 'basketbol'];
let sports2 = sports.push('american footbal', 'swiming');
console.log(sports);
console.log(sports2);
// push => толкать

const chisloBukv = 'JavaScript';
const empty = ' ';
console.log('В JavaScript ' + chisloBukv.length + ' букв');
// length => длина

const words = ['spray', 'limit', 'elite', 'exuberent', 'destruction', 'present'];
const result = words.filter(words => words.length > 6);
console.log(result);
// filter => фильтр


function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}
console.log([4, 5, 8, 12].find(isPrime));
// find => находить


console.log('APPLE'.toLowerCase()); // apple
// toLowerCase => в Нижний регистр

console.log('apple'.toUpperCase()); // APPLE
// toUpperCase => в Верхний регистр

let text = "How are you today?";
const myArray = text.split(" ");
const  myArray2 = text.split("", 50)
console.log(myArray);
console.log(myArray2);
// split => расщеплять


const num = [1, 2, 3, 4, 5, 6];
console.log(num.includes(1));

const string = ['cat', 'dog', 'fox', 'bird'];
console.log(string.includes('cat'));
console.log(string.includes('at'));
// incudes => включает в себя

const arrayys = [1,2,3,4,5];
const even = (element) => element % 2 === 0;
console.log(arrayys.some(even));
// even => даже

function isBigEnough(element, index, array) {
    return element >= 10;
}

[12, 54, 18, 130, 44].every(isBigEnough);



