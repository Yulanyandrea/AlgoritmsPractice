// Timmy & Sarah think they are in love, but around where they live,
//they will only know once they pick a flower each. If one of the flowers has an even number
//of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true
//if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 %2 ==1|| flower1 % 2 == 1 && flower2 %2 ==0 ){
    return true
  }else if (flower1 % 2 == 0 && flower2 %2 ==0 || flower1 % 2 == 1 && flower2 %2 ==1)
  return false
}

console.log(lovefunc(1,2)) //true
console.log(lovefunc(2,2)) //false
console.log(lovefunc(0,1)) //true
console.log(lovefunc(0,0)) //false

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
//You don't have to worry with strings with less than two characters.

function removeChar(str){
  return str.substring(1,str.length-1)
 };

  console.log(removeChar('country'))//, 'ountr');
  console.log(removeChar('person'))//, 'erso');
  console.log(removeChar('place'))//, 'lac');
  console.log(removeChar('ooopsss'))//, 'oopss');

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
  let value =0;
  for(let i =0 ; i<array.length; i++){
    value +=array[i]/array.length
  }
  return value

}
// Other way in order to not have  conflicts
//  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
console.log(findAverage([])) //1;
console.log(findAverage([1,1,1])) //1;
console.log(findAverage([1,2,3])) //2;
console.log(findAverage([1,2,3,4])) //2.5;
console.log(findAverage([66,34,9,32,6]) )
console.log(findAverage([20,5,52,1,60,66,47,83,28,67,47,21,36,32,6])) //38.06666666666667


//There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(array) {
  array.sort();
  return array[0] === array[1] ? array[array.length - 1] : array[0];
}

console.log(findUniq([ 1, 0, 0 ])) //1
console.log(findUniq([ 0, 1, 0 ])) //1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

// hello world function
const greet = () => {
  let word ="Hello world!"

}

//capitalize the first letter in a word

function capitalize(sentence){
  const words = sentence.split(" ");

  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}
console.log(capitalize('hola como estas'))

// Your task is to make two functions ( max and min, or maximum and minimum, etc.,
// depending on the language ) that receive a list of integers as input,
//and return the largest and lowest number in that list, respectively.
let min = function(list){
    let listM = Math.min(...list)
  return listM;
}

let max = function(list){
  let listNumber = Math.max(...list)
  return listNumber;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4,6,2,1,9,63,-134,566]));
console.log(max([5]));

// Given an array of integers, return a new array with each value doubled.
function maps(x){
  let newArray=[]
  let numbers =0
 for(let i =0; i<x.length;i++){
    numbers = x[i]*2
    newArray.push(numbers)
 }
  return newArray
}

//Another way : return x.map(n => n * 2);

console.log(maps([1, 2, 3])) // [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4])) //[8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2])) //[4, 4, 4, 4, 4, 4]);

// Complete the square sum function so that it squares each number passed into it
// and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because

function squareSum(numbers){
  let result = 0;
  for(let i =0 ; i<numbers.length;i++){
    result += numbers[i]**2

  }

  return result
}

console.log(squareSum([1,2])) //5;
console.log(squareSum([0, 3, 4, 5]));//50
console.log(squareSum([])); //0

// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  let answer = number %2 === 0? "Even" : "Odd"

  return answer
}

console.log(evenOrOdd(3))


//Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return bol =b.toString()
}

console.log(booleanToString(true))

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  return n<0 || m<0 ? 0 : n*m
}

console.log(paperwork(5,5))
console.log(paperwork(0,-3))

// You will be given an array a and a value x. All you need to do is check
// whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.

function check(a, x) {
  let numbers = false
  for(let i = 0 ; i<a.length;i++){
    if(a[i]=== x){
      numbers= true
    }
  }
return numbers
}

console.log(check([66, 101], 66)) //true
console.log(check([101, 45, 75, 105, 99, 107], 107))//true
/// Other answer :  a.includes(x)


// You are given an array(list) strarr of strings and an integer k. Your task is to return
//the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  let longestString = "";
  let maxLength = 0;
  let variable = strarr.length

  if (k <= 0 || k > strarr.length) {
    return longestString;
  }

  for (var i = 0; i <= strarr.length - k; i++) {
    var currentString = strarr.slice(i, i + k).join("");
    var currentLength = currentString.length;

    if (currentLength > maxLength) {
      maxLength = currentLength;
      longestString = currentString;
    }
  }

  // return longestString;
  return variable

}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
