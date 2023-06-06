///// RomanNumbers
function romanToInt(s) {
  let sum = 0;
  const numbers = {
   "I" :1,
   "V" : 5,
   "X" : 10,
   "L" : 50,
   "C" : 100,
   "D" : 500,
   "M" : 1000
  }
  const letter = s.split("")
  for(let [key, value] of Object.entries(numbers)){
    for(let i=0; i<letter.length; i ++){
      if(key === letter[i]){
        sum +=value
      }
    }
  }
  return sum

};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

