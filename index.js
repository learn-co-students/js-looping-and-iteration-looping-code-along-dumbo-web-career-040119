// Code your solutions in this file

// const writeCards = (["Ada", "Brendan", "Ali"], "birthday");


function writeCards(gifts, event) {
  let finCards = []
  for (let i = 0; i < gifts.length; i++) {
    finCards.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`);
  }

  return finCards;
}

function countdown() {
  let countdown = 10;
  while (countdown >= 0) {
    console.log(countdown--);
  }
}
