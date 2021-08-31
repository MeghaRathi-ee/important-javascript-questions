// program to sort the items of an array.

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 , 3984723, 200, 400, 37864];

function arraySort(array){
    let num;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                num=array[i];
                array[i]=array[j];
                array[j]=num;
            }
        }
    }
    console.log(array);
}

arraySort(arr1);

// by sort() method 
console.log(arr1.sort());


