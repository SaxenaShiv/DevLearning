let fs = require('fs');
console.log("Before");
// ensured
fs.readFile("cb.js",cb)

function cb(err,data) {
    if(err){
        console.log("Error:"+err)
    }else{
        console.log("content"+ data);
    }
}
console.log("After");
while(true){
    
}
