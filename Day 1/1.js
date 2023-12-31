/* 
The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. 
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
const filestream = fs.createReadStream("./Day 1/1.txt");

const rd = readline.createInterface({
    input: filestream,
    output: process.stdout,
    console: false
});

let lineNum = 0;
let calibration = 0;

rd.on('line', function(line){
    lineNum++;
    let arr = line.split("");
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= '0' && arr[i] <= '9'){
            calibration += Number(arr[i]) * 10;
            break;
        }
    }
    
    for(i = arr.length; i >= 0; i--){
        if(arr[i] >= '0' && arr[i] <= '9'){
            calibration += Number(arr[i]);
            break;
        }
    }
});

rd.on('close', function(){
    console.log("Calibration: "+calibration)
    console.log("Done");
});
