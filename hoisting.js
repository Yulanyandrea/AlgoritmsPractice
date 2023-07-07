nombreDelGato("Dumas");

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}

/////////////////////
saludar(); // Imprime: ¡Hola!
function saludar() {
  console.log('¡Hola!');
}
//////////////////////////7
saludar(); // Error: TypeError: saludar is not a function
const saludar = function() {
  console.log('¡Hola!');
};
saludar(); // Imprime: ¡Hola!

