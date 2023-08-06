function descendingOrder(n){
  let numbers = n.toString().split('').sort((a,b)=> b-a)
  let result2 =parseInt(numbers.join(''))
  return result2


}

console.log(descendingOrder(111)) //54421
