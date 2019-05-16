// Code your solutions in this file
function writeCards(array, event) {
  let thankYouCards = []
  for ( let i = 0; i < array.length; i++ ) {
    thankYouCards.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countdown( count ) {
  while ( count > 0 ) {
    console.log( count );
    count -= 1;
  }
  console.log( count );
}
