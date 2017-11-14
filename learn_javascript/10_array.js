// this is an array, which is just a bunch values in sequence
const names = ['Ann', 'Norris', 'World']

// this logs the elements of the array in order
// every array has a 'length' property by default, which indicates the number of elements inside it
for (let i = 0; i < names.length; i++) {
  var name = names[i]
  console.log(`Hello ${name}`)
}
