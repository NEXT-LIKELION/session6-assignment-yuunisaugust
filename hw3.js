const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4]; 
let evenNumbers = numbers.filter(value => value % 2 === 0);
console.log(evenNumbers);
let squared = evenNumbers.map(num => num**2);
console.log(squared);
const total = squared.reduce((sum, num) => sum+num, 0);
console.log(total);

