const crops = [
  { id: 1, hectaresPlanted: 500 },
  { id: 2, hectaresPlanted: 1000 },
  { id: 1, hectaresPlanted: 800 },
  { id: 3, hectaresPlanted: 1200 },
  { id: 2, hectaresPlanted: 600 }
];

const names = [
  { name: "yuca" , id: 1},
  { name: "uva" ,id: 2},
  { name: "lulo" , id:3},
];

const array =[]
const randomIndex = Math.floor(Math.random() * names.length);
const idToFind = names[randomIndex].id;
// Filter the crops by id and sum the hectaresPlanted for the filtered crops
const sumHectares = () =>{
//   const result = crops
//   .filter(crop => crop.id === idToFind)
//   .reduce((acc, crop) => acc + crop.hectaresPlanted, 0);

// // Find the object in the names array with id = 1 and access its name property
// const cropName = names.find(obj => obj.id === idToFind).name;
// array.push(result, cropName)
// return array


crops.forEach(crop => {
  const nameObj = names.find(obj => obj.id === crop.id);
  const name = nameObj.name;
  const hectares = crop.hectaresPlanted;

  if (name in array) {
    array[name] += hectares;
  } else {
    array[name] = hectares;
  }
});

return array
}

console.log(sumHectares() )
