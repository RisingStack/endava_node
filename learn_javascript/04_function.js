var world = 'World'

// this calls the greet function with 'World'
// functions can be called before they are defined
greet(world)
greet('Again')

// this defines a reusable function, that greets the passed name
function greet (name) {
  console.log('Hello ' + name + '!')
}
