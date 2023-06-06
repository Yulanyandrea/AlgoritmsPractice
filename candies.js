let  kidsWithCandies = function(candies, extraCandies) {
  let array = []
  const maxNum = Math.max(...candies)
  candies.map((candy)=>{
    const results = candy + extraCandies
    if(results >= maxNum){
      let result =true
      array.push(result)
    }else{
      let result =false
      array.push(result)
    }
  })
  return array
}

let candies = [2,3,5,1,3]
let extraCandies = 3

console.log(kidsWithCandies(candies,extraCandies))

/// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
function twoSum(nums, target) {
  let sum = 0;
  let array=[]
  for(let i =0; i<nums.length; i++){
    for (let j = i+1; j < nums.length; j++) {
      sum = nums[i]+nums[j]
     if(sum=== target){
      array.push(i,j)

     }

    }

  }
  return array

};

const nums = [3,3]
const  nums2 = [3,2,4]
const nums3 = [3,2,3]
const target = 6
console.log(twoSum(nums,target))
console.log(twoSum(nums2,target))
console.log(twoSum(nums3,target))
