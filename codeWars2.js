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

// We need a function that can transform a number (integer) into a string.
//What ways of achieving this do you know?

function numberToString(num) {
  return num.toString()

}

console.log(numberToString(123))

//An isogram is a word that has no repeating letters,
//consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.
//Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
  let letter =str.toLowerCase()
  let letters={}
  for(let i =0; i<letter.length;i++){
    if(letters[letter[i]]){
      return false

    }
    letters[letter[i]] = true;
  }
  return true
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram( "moose"))

//Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter,
//vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
//employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false
function setAlarm(employed, vacation){
  return employed== true && vacation==false ? true : false

}

console.log(setAlarm(false,false))

//Given an array of integers as strings and numbers,
//return the sum of the array values as if all were numbers.
//Return your answer as a number.
function sumMix(x){
  let suma =0
  for(let i=0; i<x.length;i++){
    suma += parseInt(x[i])

  }
  return suma

}
console.log(sumMix([9, 3, '7', '3']))

////Recibes dos parámetros: una lista de palabras words y una palabra word. 
//Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número) y 
//devuelve todas las palabras de words que sean más largas (length) que el número del índice.
//Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.
function buscaPalabras(words, word) {
  let finds = words.indexOf(word)
  let palabras = words.filter(palabra =>palabra.length>finds)
  return palabras
}

console.log(buscaPalabras(['play', 'balon', 'asa', 'taza', 'tio'], 'tio'))


//Recibimos una matriz de cadenas de texto. 
//Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y 
//el índice de la columna.
function findJavaScript(matrix) {
  let answer =[]
  // tu código aquí
  for(let i=0; i<matrix.length;i++){
    for(let j=0;matrix[i].length;j++){
      if(matrix[i][j]=== "JavaScript" ){
        return answer.push([i,j])
      }
    }
  }
  return  answer.push(-1,-1)
}
const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]
console.log(findJavaScript(matrix))