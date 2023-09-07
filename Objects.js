// Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:

// name con el valor del parámetro name
// subscribers con el valor del parámetro subs
// hash, con el valor de la longitud del string name multiplicado por el parámetro subs
// Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
// ¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.


function createObject(name, subs) {

let object = {
  name: name,
  subscribers: subs,
  hash: name.length * subs,
  getStatus:function (){
    return `El canal de ${name} tiene ${subs} suscriptores`
  }

}
  return object
}

console.log(createObject("Yulany", 10000).getStatus())

//Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
// Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.

function getKeysOfBooleanValues(obj) {
    let array = []
    for (let val in obj){
      if(typeof(obj[val])==="boolean"){
        array.push(val)
      }
    }

  return array
    }

console.log(getKeysOfBooleanValues({ a: true, b: true, c: false }))
