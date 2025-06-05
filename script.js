const names = ["Jack", "Mark", "Alex"]
const numbers = ["11", "32", "100"]

const firstElement = names[0];
console.log(firstElement)
const middle = Math.floor(Array.length / 2);
console.log(middle)
const last = names[names.length -1];
console.log(last)

console.log(names.length)

names.push("Marco")
console.log(names)
names.pop();
console.log(names)
names.shift();
console.log(names)

//loop 1
names.forEach((element) => console.log(element));
console.log(names)

//loop 2 with math
const numbers1 = numbers.map(num => num * 2)
console.log(numbers1)

//Destructure the first two elements
const firstTwo = names.slice(0, 2);
console.log(firstTwo)

//using rest parameter
const [first, second, ...rest] = names;

console.log(first);
console.log(second);
console.log(rest);
