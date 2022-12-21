const prompt = require('prompt-sync')();
let arr=[];
let avg=[0,0,0,0,0];
const name=["david","vinod","divya","ishitha","thomas"]
let i=0;
let j=0;
let sum=0;
let grad=[]
//assumption 4 marks for each student
//no of students is 5 as per qs
for(; j<5;){
    console.log(`enter marks for ${name[j]}`)
for (i=0; i < 4; ) {
    sum+=Number(prompt(`enter mark ${i+1} `));
    //console.log(`sum ${sum}`);
    i++;
  }
  avg[j]=sum/4;
  //console.log(avg[j]);
  sum=0;
  if(avg[j]<60){grad[j]="F"}
  else if(avg[j]<70){grad[j]="D";}
  else if(avg[j]<80){grad[j]="C";}
  else if(avg[j]<90){grad[j]="B";}
  else if(avg[j]<100){grad[j]="A";}
  j++;
}


for (i=0; i < 5; )
{
    console.log(`${name[i]} average ${avg[i]} grade ${grad[i]}`)
    i++;
}