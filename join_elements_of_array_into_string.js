//program to join all elements of the following array into a string.

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(','));
console.log(myColor.join('+'));

function arrayToString(arr){
    let string='';
    for(i=0;i<arr.length;i++){
        string +=(arr[i]+',');
    }
    console.log(string);
}

function arrayToString1(arr){
    let string='';
    for(i=0;i<arr.length;i++){
        string +=(arr[i]+'+');
    }
    console.log(string);
}

arrayToString(myColor);
arrayToString1(myColor);