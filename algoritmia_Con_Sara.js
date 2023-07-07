let number1 = 2;
const isDoble = (number2) => {
  if(number2 === number1**2){
    return 'yes'
  }else {
    return 'no'
  }
}

console.log(isDoble(4))

let nombres ="hola/luna/yula/jonas/sofia"
let variable = nombres.split()
console.log(variable.length)

//////////////////////

let intentos = [1,5,10,12]
console.log(intentos[4])

/////////////
let paises= [['mx','ca'],'es']
console.log(paises[0][0][0])

/////////////

let a,b = [3,9]
console.log(a)
console.log(b)

let [c,d] =[3,9 ]
console.log(c)

//////
let obj={
  h:1,
  i:2
}

let { i,h } =obj
console.log(h)

/////////////
const y = [3,6,9,12,15]
const [w,v]= y
console.log(w)
console.log(v)

////////////////
const book = {
  title:"js",
  numPage:300,
  author:{
    name:"girlDev",
    address :{
      country :"MX",
      city:"ciudad"
    }
  }

}
const {title, author:{address:{city}}} = book
console.log(title, city)

//////////////////////
let x= 2
x=3
console.log(x)

/////////
let num = 2
let seguir = true

if(seguir){
  let num =3
}else {
  let num=5
}

console.log('holi',num)
////////////////
let texto = "holi soy Yulany"
console.log(texto.charAt(0))
//////////////
console.log(Math.ceil(7.3)) //8
console.log(Math.round(7.3)) // 7
console.log(+ "xyz") //NaN
console.log(19 + true) //20
console.log((10).toString(2))

////////////////////////////////////////

