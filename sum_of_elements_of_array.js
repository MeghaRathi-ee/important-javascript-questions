array=[1,2,3,4];

let sum=array.reduce(
    (accumulator, currentValue) => accumulator+currentValue
);

console.log(sum);

function addition(arr){
    sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
}

addition(array);