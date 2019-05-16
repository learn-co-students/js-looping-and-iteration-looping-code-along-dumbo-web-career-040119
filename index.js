// Code your solutions in this file
function writeCards(names,event) {
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return newArr
}

function countdown(num){
while ( num >= 0) {
  console.log(num--);
  }
}
