// Code your solutions in this file
function writeCards(array,greet){
    let arr = []
    for(let i=0; i< array.length; i++){
        arr.push(`Thank you, ${array[i]}, for the wonderful ${greet} gift!`);
    }
    return arr;
}

function countdown(int){
    while (int >= 0){
        console.log(int);
        int--;
    }
}