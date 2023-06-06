function diagonalDifference(arr) {
  let suma =(arr[2]+arr[4]+arr[6])-(arr[0]+arr[4]+arr[8])
  return suma
}

console.log(diagonalDifference([11, 2, 4,
  4, 5, 6,
  10, 8, -12]))

console.log(diagonalDifference([1, 2, 3,
    4, 5, 6,
    9, 8, 9]))


function diagonalDifference(arr) {
      let n = arr.length;
      let primaryDiagonalSum = 0;
      let secondaryDiagonalSum = 0;

      for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
      }

      return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
    }
