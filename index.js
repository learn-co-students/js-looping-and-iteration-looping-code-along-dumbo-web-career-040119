function writeCards(folks, ev) {
  const text = []
  for (let i = 0; i < folks.length; i++) {
     text.push(`Thank you, ${folks[i]}, for the wonderful ${ev} gift!`)
  }
  return text
}

function countdown(i) {
  let counter = i
  while (counter >= 0) {
    console.log(counter);
    counter--;
  }}

writeCards(["Ada", "Brendan", "Ali"], "birthday");
