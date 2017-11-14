// by returning the object itself (this) in every method I can chain method calls later
var counter = {
  num: 0,
  tick: function (amount) {
    this.num = this.num + amount
    return this
  },
  log: function () {
    console.log('Counter is at: ' + this.num)
    return this
  }
}

// this is equivalent to: counter.tick(5); counter.log(); counter.tick(2); counter.log();
counter
  .tick(5)
  .log()
  .tick(2)
  .log()
