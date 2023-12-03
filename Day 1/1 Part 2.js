/* 
Your calculation isn't quite right.
It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen

In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.
What is the sum of all of the calibration values?
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

    line = line.replaceAll("one", "o1e");
    line = line.replaceAll("two", "t2o");
    line = line.replaceAll("three", "t3r");
    line = line.replaceAll("four", "f4u");
    line = line.replaceAll("five", "f5v");
    line = line.replaceAll("six", "s6x");
    line = line.replaceAll("seven", "s7v");
    line = line.replaceAll("eight", "e8g");
    line = line.replaceAll("nine", "n9n");

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
