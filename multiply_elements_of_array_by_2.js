let arr = [1,2,3,4];
let newarr = arr.map(x => x * 2);

console.log(newarr);

function multiply(array){
    newarr=[];
    for(let i=0;i<array.length;i++){
        newarr[i]=arr[i]*2;
    }
    console.log(newarr);
}

multiply(arr);