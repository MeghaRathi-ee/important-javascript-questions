// function to find the maximum and minimum number from an array.

numbers=[1,2,4,8,6];

console.log(Math.max(1,2,4,8,6));
console.log(Math.min(1,2,4,8,6));

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

function maximum(number){
    let max=number[0];
    for(i=1;i<number.length;i++){
        if(number[i]>max)
            max=number[i];
    }
    console.log(max);
}

function minimum(number){
    let min=number[0];
    for(i=1;i<number.length;i++){
        if(number[i]<min)
            min=number[i];
    }
    console.log(min);
}

maximum(numbers);
minimum(numbers);
