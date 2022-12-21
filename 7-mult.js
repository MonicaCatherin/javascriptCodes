let i=1;
for (; i <=100; ) {
    if(i%3==0 && i%5==0){
        console.log(`FizzBuss `);
    }
    else if(i%3==0 ){
        console.log(`Fizz `);
    }
    else if(i%5==0 ){
        console.log(`Buzz `);
    }
    else{
        console.log(i);
    }
    i++;
  }
