const prompt = require('prompt-sync')();

function gcd(x,y){
    if(x<y)
{
    div=x;
}
else{
    div=y;
}
while(div){
    //console.log(div);
    if(x % div==0 && y % div==0)
    {
      return div;
    }
    div--;
}
return 0;
}

const no1 = Number(prompt('enter no1'));
const no2 = Number(prompt('enter no2'));
let div=0;
const greatestCommonDiv=gcd(no1,no2);
console.log(`GCD of ${no1} and ${no2} is ${greatestCommonDiv}`)
