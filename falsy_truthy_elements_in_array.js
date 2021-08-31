let array=[NaN, 0, 15, false, -22,'',undefined, 47, null];

let newarr=[];
function truthy(arr){
    //let newarr=[];
    for(let i=0;i<arr.lenght;i++){
        if(arr[i])
            newarr.push(arr[i]);
    }
    console.log(newarr);
}

truthy(array);