function processData(input) {
    //Enter your code here
    
    let newArr = JSON.parse(input);
    
    for(let i=0;i<newArr.length;i++){
        console.log(i);
    }

    
     
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
