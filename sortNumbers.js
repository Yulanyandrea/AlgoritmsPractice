const sortNumbers= (n1) => {
  for (let i = 0; i < n1.length - 1; i++) {
    if (n1[i] > n1[i + 1]) { // n1[i] hace referencia a la primera posicion del array // n1[i+1] hace referencia a la segunda posicion y demas
      let valor = n1[i]; //
      n1[i] = n1[i + 1]; // a n1[i] se le cambia el valor por el de la segunda posicion
      n1[i + 1] = valor; // a n1[n+1] se le asigna el valor de la primera posicion xq se comprobo que la primera posicion era mayor
    }
  }
  return n1

}

console.log(sortNumbers([2,1,30]))
console.log(sortNumbers([40,2,4,20]))
