// Code your solutions in this file
function writeCards(arr, event){
  let cards = []
  for(let i = 0; i <arr.length; i++){
    cards.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return cards
}

function countdown(int){
  while (int > 0){
    console.log(int);
    int-= 1;
  }
  console.log(int);
}
