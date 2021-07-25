//import 
// require -> path of the file from 
// where you want to import fxns or variables
let libExportsObj = require("./lib");
console.log("I am client file");
console.log(libExportsObj.varName);
console.log(libExportsObj.fxn());
