let path = require("path");
let fs = require("fs");

// let currentPath = process.cwd();
// console.log(currentPath);
// let joinedPaths = path.join(currentPath,"Shiv","Abe","cde");
// console.log(joinedPaths);

// let lastPosition = path.basename(joinedPaths);
// console.log(lastPosition);

// let ext = path.extname(joinedPaths);
// console.log(ext);
let srcPath = "D:\\Js\\Pepcoding\\Module_1_FS\\lect_1\\fun_with_node\\path.js";
let destFolder = "C:\\Users\\shivs\\Desktop\\NewJs";
let fileName = path.basename(srcPath);
let destPath = path.join(destFolder,fileName);

fs.copyFileSync(srcPath,destPath);

