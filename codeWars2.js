function descendingOrder(n){
  let numbers = n.toString().split('').sort((a,b)=> b-a)
  let result2 =parseInt(numbers.join(''))
  return result2
}

console.log(descendingOrder(111)) //54421

/// exercise 2
//Given an array of integers, remove the smallest value. Do not mutate the original array/list.
//If there are multiple elements with the same value,
//remove the one with a lower index. If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {

  let minValue = Math.min(...numbers)

  const indexOfMinValue = numbers.indexOf(minValue);
  console.log(indexOfMinValue)

  return numbers.filter((value, index) => index !== indexOfMinValue);

}
console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest( [2,2,1,2,1]))
console.log(removeSmallest([2]))

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if(p1==="scissors" && p2==="paper" ||
  p1==="paper" && p2==="rock" ||
   p1==="rock" && p2==="scissors"  ){
   return "Player 1 won!"
  }else if(p1===p2){

    return  "Draw!"

  }

  else {
    return "Player 2 won!"
  }

};

console.log(rps("scissors","paper"))
console.log(rps("scissors","rock"))
console.log(rps("rock","rock"))

//You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
//Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
 return l ===w ? l*w : (2*l+2*w)
};

console.log(areaOrPerimeter(3,  3))
console.log(areaOrPerimeter(6,  10))

