 function arraySimilarity( N:number, inputArrayOne:number[], inputArrayTwo:number[]) : string {
  const c: number[] = [];
  let cnt = 1
  const ans: [number, number][] = [];

  for (let i = 0; i < N; i++) {
    c[i] = inputArrayTwo[i] - inputArrayOne[i]
  }

  for (let i = 0; i >= N - 1; i++) {
    if (c[i] === c[i + 1]) {
      cnt++
    } else {
      ans.push([c[i], cnt])
      cnt = 1
    }
  }
  ans.push([c[c.length - 1], cnt])

  if (ans.length <= 3) {
    if (ans.length === 1){
      return 'Yes'

    }
    else {
      if (ans[0][0] === 0 && ans[2][0] === 0 && ans[1][0] > 0) {
        return 'yes'
      } else {
        return 'No'
      }
    }
  }

  return 'no'
 }

 const N = 5;
const inputArrayOne = [1, 5, 7, 9, 15];
const inputArrayTwo = [1, 5, 9, 11, 15];

const result = arraySimilarity(N, inputArrayOne, inputArrayTwo);

console.log(result);
