var names = ['Bob', 'Ted', 'Mario']

function greet (name) {
  console.log(`Hello ${name}!`)
}

// functions can also be passed as parameters to other functions, we call these 'callback functions'
// in this case I pass my logger function to the 'forEach' method and let it call my function
// for every element in the array
names.forEach(greet)
