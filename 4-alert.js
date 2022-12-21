//npm install alert
const prompt = require('prompt-sync')();
let alert = require('alert'); 

let arr=[];
let i=0;
for (; i < 5; ) {
    arr[i]=prompt(`enter no ${i} `);
    i++;
  }

arr.sort(function(a, b){return a-b});
alert(arr[4])