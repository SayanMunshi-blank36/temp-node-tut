// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require("./names");
const {john, peter} = require("./names");

const sayHi = require("./utils");

const data = require("./alternative_flavour");
console.log(data);

require("./mind_grenade");

sayHi("susan");

// sayHi(names.john);
sayHi(john);

// sayHi(names.peter);
sayHi(peter);