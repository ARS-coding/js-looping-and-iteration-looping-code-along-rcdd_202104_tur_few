// Code your solutions in this file

function writeCards(arr, eventName) {
  let empty = [];
  for (let i = 0; i < arr.length; i++) {

    empty.push("Thank you, " + arr[i] + ", for the wonderful " + eventName + " gift!");
  }
  return empty;
}
