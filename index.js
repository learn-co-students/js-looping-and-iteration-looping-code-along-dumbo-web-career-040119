// Code your solutions in this file
// function writeCards(names, event){
//   let cards = [];
//   for (let i = 0; i < names.length; i++) {
//   cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
// }
// return cards;
// }

function writeCards(names, event){
  let cards = [];
  for (const name of names){
    cards.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
  }
  return cards;
}

function countdown(start){
  while (start >= 0) {
    console.log(start);
    start--;
  }
}
