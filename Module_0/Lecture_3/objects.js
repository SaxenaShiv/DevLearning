let obj = {};
let cap = {
    //properties
    Name:"Steve",
    "lastName": "Rogers",
    
    friend : ["Bucky","tony","Black panther"],
    age = 34,
    isAvenger : true,
    //methods
    sayHi: function(){
        console.log("cap say's Hi!");
        
    },
    10 : "My value id 10",
    address :{
        state : "New york",
        city : "NY city"
    },



}
//print
// console.log(obj);
// console.log(cap);

//access -> .notation key -> value get access
console.log("firstName",cap.Name);
// console.log("friend", cap.friend[0]);
// console.log("city",cap.address.city);
// console.log("isAvenger", cap.isAvenger);
// //method calls
// //cap.sayHi();
// //access way ->[] operator
// //whenever
// // 1. you have to access key that has space in input
// // 2. you have to access key is of type number
// console.log("last Name ",cap["lastName"])
console.log("10 value", cap[10]);

// let varName = 10;
// console.log("value is", cap[varName]);
// varName = "address";
// console.log("value is",cap[varName]);

// loop over an object
for(let key in cap){
console.log(key," : ",cap[key]);

}