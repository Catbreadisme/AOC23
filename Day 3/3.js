/*
The engine schematic (your puzzle input) consists of a visual representation of the engine. 
There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum.
(Periods (.) do not count as a symbol.)

Here is an example engine schematic:

467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..

In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). 
Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?
*/

const fs = require("fs");
const readline = require("readline");
const filestream = fs.createReadStream("./Day 3/3.txt");

const rd = readline.createInterface({
    input: filestream,
    output: process.stdout,
    console: false
});

const opArray = ["+", "-", "*", "/", "#", "$", "@", "=", "%", "&"]
console.log(opArray.length)

let sum = "";

let operator = "";

let numbers = [];
let array2d = [];
let lineNum = 0;

rd.on('line', function(line){
    
    let arr = line.split("")
    array2d[lineNum] = arr;
    
    lineNum++;
});

rd.on('close', function(){
    for (let x = 0; x < array2d.length; x++) {
        for (let y = 0; y < array2d.length; y++) {
            if (array2d[x][y] >= 0) {
                numbers.push(Number(array2d[x][y]));   
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        
                        if (x > 0 && y > 0 && x < array2d.length -1 && y < array2d.length -1) {
                            for (let k = 0; k < opArray.length; k++) {
                                if (array2d[x+i][y+j] == opArray[k]) {
                                    console.log("op = "+opArray[k]);
                                    operator = opArray[k];
                                    
                                }
                            }
                                
                        }
                        if (x == 0) {
                            if (i == -1) {
                                i = 0
                            }
                            for (let k = 0; k < opArray.length; k++) {
                                if (array2d[x+i][y+j] == opArray[k]) {
                                    console.log("op = "+opArray[k]);
                                    operator = opArray[k];
                                    
                                }
                            }
                        }
                        if (y == 0) {
                            if (j == -1) {
                                j = 0
                            }
                            for (let k = 0; k < opArray.length; k++) {
                                if (array2d[x+i][y+j] == opArray[k]) {
                                    console.log("op = "+opArray[k]);
                                    operator = opArray[k];
                                    
                                }
                            }
                        }
                        if (x == array2d.length-1) {
                            if (i == 1) {
                                break;
                            }
                            for (let k = 0; k < opArray.length; k++) {
                                if (array2d[x+i][y+j] == opArray[k]) {
                                    console.log("op = "+opArray[k]);
                                    operator = opArray[k];
                                    
                                }
                            }
                            
                        }
                        if (y == array2d.length-1) {
                            if (j == 1) {
                                break;
                            }
                            for (let k = 0; k < opArray.length; k++) {
                                if (array2d[x+i][y+j] == opArray[k]) {
                                    console.log("op = "+opArray[k]);
                                    operator = opArray[k];
                                    
                                }
                            }
                        }
                    }
                    
                }
            
            }
            else{
                numbers.push("+")
                if (operator != "") {
                    sum += numbers.join('');
                }
                numbers = [];
                operator = "";
            }
        }
    }
    console.log(sum)
    sum = sum.concat(0)
    console.log((eval(sum)))
    console.log("Done");
});

