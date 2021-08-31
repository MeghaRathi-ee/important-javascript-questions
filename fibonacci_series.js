let num1=0, num2=1, fib; 

function fibonacci(limit){
    for(let i=1;i<=limit;i++){
        console.log(num1);
        fib=num1+num2;
        num1=num2;
        num2=fib;
    }
}

fibonacci(16);