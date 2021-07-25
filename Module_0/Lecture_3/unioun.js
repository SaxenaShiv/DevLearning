function processData(input) {
   
    let newArr = input.split("\n");
    
    
    let arr1 = newArr[0];
    let arr2 = newArr[1];
    
    let ansArr = arr1;
    
    
    
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<ansArr;j++){
            if(arr2[i] != ansArr[j]){
                ansArr.push(arr2[i]);
            }else{
                continue;
            }
        }
    }
    
    console.log(ansArr);
    
    // for(let i=0;i<arr1.length;i++){
    //     for(let j=0;j<arr2.length;j++){
    //         if(arr1 [i] != arr2[j]){
    //             ansArr.push(newArr[i][j]);
    //         }
    //     }
    // }
    
    
    
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
