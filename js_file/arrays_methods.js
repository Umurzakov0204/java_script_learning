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


