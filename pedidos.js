// En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

// El primer elemento lo sacamos del array, ya que es el nombre del cliente.
// Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
// Después añadimos al final del array el nombre del usuario que sacamos antes.
// Recuerda que debes devolver el array modificado:


function procesarPedido(pedidos) {
    let position = pedidos[0]
    pedidos.shift()
    pedidos.unshift("bebidas")
    pedidos.push(position)
    return pedidos
  }

  console.log(procesarPedido(['Yulany','cocacola', 'pizza']))

//   Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. 
//   Usa el bucle que quieras para solucionarlo.

function sumarPares(numeros) {
    let suma = 0
    for(let i = 0; i<numeros.length;i++){
      if(numeros[i] % 2 === 0){
        suma+=numeros[i]
      }
      
      
    }
    return suma
  }

  /////Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y 
  //false si al menos una palabra no termina con la letra "a".

  function acabanEnA(words) {
    let condition 
    // tu código aquí
    for(let i =0; i<words.length;i++){
        if(words[i].endsWith("a")){
            condition =true
        }else {
            condition = false
        }
    }
    return condition
}
  console.log(acabanEnA(["hola","maria"]))


//Recibes una lista de números. D
// Debes ordenar los números de menor a mayor según su valor absoluto. Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
// Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].
// Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.


function sortAbsoluteNumbers(numbers) {
    let array =[]
    for(let i =0; i<numbers.length;i++){
        let variable = Math.abs(numbers[i])
        array.push(variable)
        array.sort(function(a, b) {
            return a - b
          })


    }
    return array
}

console.log(sortAbsoluteNumbers([5, -10, -2, -25, -7]))
