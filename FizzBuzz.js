for(i=1;i<=100;i++){
    let output=fizzbuzz(i);
    //console.log(output);
    function fizzbuzz(input){
        if (input%3===0 && input%5===0)
            console.log(input,'FizzBuzz');
        if (input%3===0)
            console.log(input,'Fizz');
        if (input%5===0)
            console.log(input,'Buzz');
    }            
}
