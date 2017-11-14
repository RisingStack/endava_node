function greet () {
  console.log('Hello World!')
}

// passed callback functions might be called after some wait
// this example will log 'Hello World!' after a 1 second delay
setTimeout(greet, 1000)
