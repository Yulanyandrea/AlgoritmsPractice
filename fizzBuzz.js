// fizzBuzz
function fizzBuzz(n) {
  let response = " "
  for(let i = 1; i<=n; i++ ){

    if(i % 3 === 0 && i % 5 === 0){
      response+="FizzBuzz "
    }

    else if( i % 3 === 0){
      response+="Fizz "+ "\n"
    }

    else if (i % 5 === 0){
      response+= "Buzz " + "\n"
    }

    else {
      response+= i + "\n"
    }
  }
  return response.trim()
}

console.log(fizzBuzz(15))

///////Palindrome
function isPalindrome (x) {
  const digits = x.toString()
  const number = digits.toString().split("").reverse().join("")

  if(digits === number){
    return true
  }else if(digits !== number){
    return false
  }


};
let number = -121
console.log(isPalindrome(number))

