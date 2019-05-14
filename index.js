function writeCards(givers, event) {
  const cards = []
  for (var i = 0; i < givers.length; i++) {
     cards.push(`Thank you, ${givers[i]}, for the wonderful ${event} gift!`)
  }
  return cards
}


function countdown(int) {
  let counter = int
  while (counter >= 0) {
    console.log(counter);
    counter--;
  }
}
