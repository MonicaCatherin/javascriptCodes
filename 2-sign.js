const prompt = require('prompt-sync')();
const no1 = prompt('enter no1');
const no2 = prompt('enter no2');
const no3 = prompt('enter no3');
const prod=no1*no2*no3;
if (prod<0){
    console.log(`the sign is -`);
}
else{
    console.log(`the sign is +`);
}
