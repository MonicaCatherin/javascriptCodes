
const prompt = require('prompt-sync')();
const no1 = prompt('enter no1');
const no2 = prompt('enter no2');
const no3 = prompt('enter no3');

if (no1<no2 && no1<no3)
{
        if (no2<no3)
        {
            console.log(no1 + ", " + no2 + ", " +no3);
        }
        else
        {
            console.log(no1 + ", " + no3 + ", " +no2);
        }
}
else if (no2<no1 && no2<no3)
{
        if (no1<no3)
        {
             console.log(no2 + ", " + no1 + ", " +no3);
        }
        else
        {
             console.log(no2 + ", " + no3 + ", " +no1);
        }
}
else if (no3<no1 && no3<no2)
{
        if (no1<no2)
        {
            console.log(no3 + ", " + no1 + ", " +no2);
        }
        else
        {
            console.log(no3 + ", " + no2 + ", " +no1);
        }
}        