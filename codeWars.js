// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
  let newArray = []
  friends.forEach(friend => {
     friend.length === 4 ? newArray.push(friend) : 'no'
  });
  return newArray
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))

// otra forma

function friend(friends){
  return friends.filter((friend) => friend.length === 4);
}

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  const hoursMiliseconds = h * 60 *60 * 1000; //horas a min , min a seg , seg a miliseg
  const minutesMiliseconds = m * 60 * 1000;
  const secondsMilisenconds = s * 1000
  return hoursMiliseconds + minutesMiliseconds + secondsMilisenconds
}

console.log(past(0,1,1))

//The main idea is to count all the occurring characters in a string. If you have a string like aba,
//then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const conteoCaracteres = {};

  for (const caracter of string) {
    conteoCaracteres[caracter] = (conteoCaracteres[caracter] || 0) + 1;
  }

  return conteoCaracteres;
}

console.log(count("abc"))

//OTRA FORMA
function count (string) {
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

////////
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let suma = 0
  classPoints.map((points)=>
      suma+=points/classPoints.length
  )
  if(suma>yourPoints){
    return false
  }else {
    return true
  }

}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))


// A hero is on his way to the castle to complete his mission.
//  However, he's been told that the castle is surrounded with a couple of p
//  owerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea
//  how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and
//  move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
  //Get Coding!
  return bullets >= dragons*2 ? true :false

  }

  console.log(hero(10, 5))
