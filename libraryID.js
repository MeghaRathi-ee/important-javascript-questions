//Write a JavaScript function to find all the details of a particular book by passing its libraryID in the function parameter for the following array of objects.

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];
 
function findBookDetails(num){
    for(let i=0;i<library.length;i++){
        if(library[i].libraryID===num)
            console.log(library[i]);
    }
}

findBookDetails(1254);