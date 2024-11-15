// Map method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Filter Method
const filter_numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter_numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Reduce Method
const sum_numbers = [1, 2, 3, 4, 5];
const sum = sum_numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);