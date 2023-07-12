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
// saludar(); // Error: TypeError: saludar is not a function
const saludar2 = function() {
  console.log('¡Holi!');
};
saludar2(); // Imprime: ¡Hola!

///////
for(var i =0 ; i<5; i++){
  setTimeout(()=>console.log(i), i * 1000) // print 5 , 5 times every 5 seconds

}

////////////////
const list = ["A", "B", "C"];

function action(element, index) {
  console.log("i=", index, "list=", element);
}

list.forEach(action);

/////////
setTimeout(() => {
  console.log("Código asíncrono.");
}, 2000);

console.log("Código síncrono.");
