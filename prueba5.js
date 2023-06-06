//  function maxSequenceSum( arr ) {
//   //Insert your code here
//   let sum ;
//   let array = []
//   const maxNum = Math.max(...arr)
//   for(let i =0; i<arr.length; i++){
//     array.push(arr[i])
//     if(array){
//       if(arr[i]>0){
//         sum = maxNum +arr[i]

//       }

//     }

//  }
//  return sum
// }


function maxSequenceSum(arr) {
  let maxSum = arr[0];
  let currentSum = 0;

  if (!arr.length) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  if (maxSum < 0) {
    return 0;
  }

  return maxSum;
}

console.log(maxSequenceSum([-2,1,-3,4,-1,2,1,-5,4]))
