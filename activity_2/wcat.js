let fs = require("fs");
let inputArray = process.argv.slice(2);


let options = [];
let filesArr = [];
for(let i=0;i<inputArray.length;i++){
    let firstChar = inputArray[i].charAt(0);
    if(firstChar == "_"){
        options.push(inputArray[i]);
    }else{
        filesArr.push(inputArray[i]);
    }
}



for(let i=0;i<filesArr.length;i++){
    let doesExists = fs.existsSync(filesArr[i]);
    if(doesExists == false){
        console.log("File does not exists");
        return;
    }
}
let content = "";
for(i=0;i<filesArr.length;i++){
 content += content + fs.readFileSync(filesArr[i])+"\r\n";
 
}
// console.log(content);
let contentArray = content.split("\r\n");
// console.log(contentArray);

let isPresent = optionsArr.includes("-s");
if(isPresent){
    for(let i=1;i<contentArray.length;i++){
       if(contentArray[i] == ""&& contentArray[i-1]==""){
           contentArray[i] = null;
       }

       if(contentArray[i] == "" && contentArray[i-1] == null){
           contentArray[i] == null;
       }
    }

    let temp = [];
    for(let i=0;i<contentArray.length;i++){
        if(contentArray[i] !== null){
            temp.push(contentArray[i]);
        }
    }

    contentArray = temp;
}

let isNotPresent = optionsArr.includes("-n");
if(isNotPresent == true){
     
    if((optionsArr.indexOf("-n")< optionsArr.indexOf("-b"))||optionsArr.indexOf("-b") == -1){
        for(let i=0;i<contentArray.length;i++){
            contentArray[i] = `${i+1} ${contentArray[i]}`;
        }
    }
}

// console.log(contentArray.join("\n"));

let isBPresent = optionsArr.includes("-b");
if(isBPresent == true){

    if(optionsArr.indexOf("-b")<optionsArr.indexOf("-n")|| optionsArr.indexOf("-n")==-1){
        let number = 1;
        for(let i=0;i<contentArray.length;i++){
            if(contentArray[i]!=""){
                contentArray[i] = `${number} ${contentArr[i]}`;
                number ++;
            }
        }
    }
}

console.log(contentArray.join("\n"));

