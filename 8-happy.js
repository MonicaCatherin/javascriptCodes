function happyNumber(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] != true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num-n ) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var happy5 = ''; 
while(cnt!= 0) 
{
    while(!happyNumber(num))
        num++ ;
happy5 = happy5+(num + "   ") ;

    num++ ;
    cnt--;
}
console.log(`The first 5 happy numbers are : ${happy5}`);