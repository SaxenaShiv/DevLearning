//function
//variable
let a=10;
function fn(){
    console.log("Hello I am Fn");
    return "Hello";
}
function notToBeExported(){
    console.log("I dont wan't to be exported");

}
// code export
module.exports = {
    varName: a,
    fxn: fn
}