const prompt = require('prompt-sync')();

let sum = 0;
const num = prompt('Enter a three digit number:-  ');
let temp = num;
while (temp > 0) {
    let rem = temp % 10;
    sum += rem * rem * rem;
    temp = parseInt(temp / 10); 
}
if (sum == num) {
    console.log(`${num} is an Armstrong number`);
}
else {
    console.log(`${num} is not an Armstrong number.`);
}