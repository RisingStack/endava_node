function logTime () {
  const time = new Date()
  console.log(time)
}

// this will log the current time in every second
setInterval(logTime, 1000)
