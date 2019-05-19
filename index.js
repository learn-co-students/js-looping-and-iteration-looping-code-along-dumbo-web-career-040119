// Code your solutions in this file
function writeCards(name_array, event_name){
  let new_array = [];
  for (let i = 0; i < name_array.length; i++){
    new_array[i] = `Thank you, ${name_array[i]}, for the wonderful ${event_name} gift!`;

  }
  return new_array;
}

function countdown(number){
  while (number >= 0){
    console.log(number);
    number--;
  }


}
