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

;

}
console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest( [2,2,1,2,1]))
console.log(removeSmallest([2]))
