function upAndDown(value) {
  const nums = value.split(',').map(Number);
  let increase = true;
  let decrease = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1] ) {
      increase = false;
    }
    if(nums[i]>nums[i-1]){
      decrease = false;
    }
  }

  return !increase && !decrease
}

console.log(upAndDown('1,2,3'));
console.log(upAndDown('0,3,2,1'));
