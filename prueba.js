let  kidsWithCandies = function(candies, extraCandies) {
  let array = []
  let maxNum = Math.max(...candies);
    for(let i =0; i< candies.length; i++){
      let result = candies[i]+ extraCandies
      if(result >= maxNum){
        let result =true
        array.push(result)
      }else{
        let result= false
        array.push(result)
      }



    }
  return array

};

let candies = [2,3,5,1,3]
let extraCandies = 3

console.log(kidsWithCandies(candies,extraCandies))
