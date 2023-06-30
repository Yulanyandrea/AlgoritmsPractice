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
