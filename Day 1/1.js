/* 
The newly-improved calibration document consists of lines of text; 
each line originally contained a specific calibration value that the Elves now need to recover. 
On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
Consider your entire calibration document. What is the sum of all of the calibration values? 
*/

const fs = require("fs");
const readline = require("readline");
const { callbackify } = require("util");
const filestream = fs.createReadStream("./Day 1/1.txt");

const rd = readline.createInterface({
    input: filestream,
    output: process.stdout,
    console: false
});

let lineNum = 0;
let calibration = 0;

console.log("Hello World");

rd.on('line', function(line){
    lineNum++;
    let arr = line.split("");
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= '0' && arr[i] <= '9'){
            calibration += Number(arr[i]) * 10;
            console.log(calibration)
            break;
        }
    }
    
    let reverseArr = arr.reverse();
    for(i = 0; i < reverseArr.length; i++){
        if(reverseArr[i] >= '0' && reverseArr[i] <= '9'){
            calibration += Number(reverseArr[i]);
            console.log(calibration + "rev")
            break;
        }
        
    }
});

rd.on('close', function(){
    console.log("Calibration: "+calibration)
    console.log("Done");
});
