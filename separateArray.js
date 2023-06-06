function arrays(inputString) {
  const [array1, array2] = inputString.split('/').map(str => str.split(',').map(Number));
  const sum = array1.map((num, index) => num + array2[index]);

  return sum;
}

console.log(arrays('1,2,3/3,2,1'));
