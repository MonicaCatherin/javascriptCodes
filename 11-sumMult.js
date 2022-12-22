
let sum3=0;
let sum5=0;
for (i=1; i <1000; i++) {
    if(i%3==0){
        sum3+=Number(i);
    }
    else if( i%5==0){
        sum5+=Number(i);
    }
    
  }

  console.log(`sum of multiples of 3 is ${sum3}`)
  console.log(`sum of multiples of 5 is ${sum5}`)