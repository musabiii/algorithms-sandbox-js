baseObj = {};
baseObj.__proto__.logg = function() {
    console.log(this)
  }

const obj = [1,2];
obj.logg();