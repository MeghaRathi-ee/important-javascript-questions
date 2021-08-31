//add and remove elements from an array.

array=[1,2,3,4];

array.push(5);
console.log(array);

array.pop();

console.log(array);

function funPush(num){
    array[array.length]=num;
    console.log(array);
}

function funPop(){
    array.length=array.length-1
    console.log(array);
}

funPush(5);

funPop();