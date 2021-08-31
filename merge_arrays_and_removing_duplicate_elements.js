// JavaScript function to merge two arrays and remove all duplicated elements.

let array1=[1,2,3,];
let array2=[2,30,1];

function mergeArray(array1,array2){
    let array=array1.concat(array2);
    let final_array=[];
    for(let i=0;i<array.length;i++){
        if(final_array.indexOf(array[i])===-1)
        {
            final_array.push(array[i]);
        }
    }
    console.log(final_array);
}

mergeArray(array1,array2);