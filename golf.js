
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  let result;
  if(strokes==1){
    result="Hole-in-one!"
  }
  else if(strokes<=par-2){
    result="Eagle"
  }
  else if(strokes<=par-1)
  {result="Birdie"}
  else if (strokes<=par){
    result="Par"
  }
  else if (strokes<=par+1){
    result="Bogey"
  }
  else if (strokes<=par+2){
    result="Double Bogey"
  }
  else{
    result="Go Home!"
  }
  // Only change code below this line



  return result;
  // Only change code above this line
}

console.log(golfScore(5, 4))
