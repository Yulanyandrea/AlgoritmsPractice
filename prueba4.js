function cantidadMinimaDeDias(x) {
  let contador = {} ;
  for (let i = 0; i < x.length - 1; i++) {
    if(contador[x[i]]){
      contador[x[i]] +=1
    }else{
      contador[x[i]] = 1

    }
  }



  return Object.keys(contador).length

}


  console.log(cantidadMinimaDeDias([4,1,2,3,4]))
