// console.log("Jai Shree Ram ❤❤");


// for(let i=0;i<end_time;i++){
//     console.log("This is Bussiness");
// }
// let input =10;
// for( i=1;i<=input;i++){
        
//         if(input%3 == 0){
//             console.log("Fizz");
//         }
        
//         else if(input%5 ==0){
//             console.log("Buzz");
//         }
        
//         else if(input%3==0 && input %5==0){
//             console.log("FizzBuzz");
//         }
        
//         else{
//             console.log(i);
//         }
//    
// process.stdout.write("arree");
// process.stdout.write(" oh");
// input = 65784383;
//  let count=0;
//     while(input !=0){
        
//         input = Math.floor(input/10);
//         count ++;
//     }
//     console.log(count);
let input =5;
 let stars = Math.ceil(input/2);
    let spaces = 1;
    
    for(let i=1;i<=input;i++){
        for(let j=1;j<=stars;j++){
            process.stdout.write("* ");
        }
        for(let j=1;j<=spaces;j++){
            process.stdout.write(" ");
        }
        for(let j=1;j<=stars;j++){
            process.stdout.write("* ");
        }
        
        console.log();
        if(i == Math.ceil(input/2) ){
              stars --;
              spaces +=2;
            }
        else{
            stars ++;
            spaces -=2;
        }

    }

