/*
The missing part wasn't the only issue - one of the gears in the engine is wrong. A gear is any * symbol that is adjacent to exactly two part numbers. 
Its gear ratio is the result of multiplying those two numbers together.

This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced.

Consider the same engine schematic again:

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

In this schematic, there are two gears. The first is in the top left; it has part numbers 467 and 35, so its gear ratio is 16345. 
The second gear is in the lower right; its gear ratio is 451490. (The * adjacent to 617 is not a gear because it is only adjacent to one part number.) 
Adding up all of the gear ratios produces 467835.

What is the sum of all of the gear ratios in your engine schematic?
*/

const fs = require("fs");
const readline = require("readline");
const filestream = fs.createReadStream("./Day 3/3-test.txt");

const rd = readline.createInterface({
    input: filestream,
    output: process.stdout,
    console: false
});

let gearRatio = "";

let lastStarPosX = 0;
let lastStarPosY = 0;
let starPosX = 0;
let starPosY = 0;

let lastNum = 0;

const numbersAndStars = {
    number: [],
    starPos: []
}
let numbers = [];
let array2d = [];
let lineNum = 0;
let hasStar = false;
let starNumAdded = false;
let starNum = 0;

rd.on('line', function(line){
    
    let arr = line.split("")
    array2d[lineNum] = arr;
    
    lineNum++;
});

rd.on('close', function(){



    generateRatio();


    for (let i = 0; i < numbersAndStars.starPos.length; i++) {
         for (let j = 0; j < numbersAndStars.starPos.length; j++) {
            if (numbersAndStars.starPos[i] == numbersAndStars.starPos[j] && numbersAndStars.number[i] != numbersAndStars.number[j]) {
                console.log(numbersAndStars.starPos[i], numbersAndStars.number[i])
                //console.log(numbersAndStars.starPos[j], numbersAndStars.number[j])
            }
        }
        }
    


    console.log(gearRatio)
    gearRatio = gearRatio.concat(0);
    console.log((eval(gearRatio)));
    console.log("Done");
});

function generateRatio(){
    for (let x = 0; x < array2d.length; x++) {
        for (let y = 0; y < array2d.length; y++) {

            

            if (array2d[x][y] >= 0) {

                numbers.push(Number(array2d[x][y]));   
                calculateRatio(x, y)
                
            } else{
                if (hasStar) {
                    numbersAndStars.number.push(numbers.join(''))
                    //Check if share star
                    
                    starNum++;
                    starNumAdded = false;
                }
                // starPosX = 0;
                // starPosY = 0;
                numbers = [];
                hasStar = false;
            }
        }
    }
}

function calculateRatio(x, y){
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            
            if (x > 0 && y > 0 && x < array2d.length -1 && y < array2d.length -1) {
                if (array2d[x+i][y+j] == "*" && starNumAdded == false) {
                    hasStar = true;
                    starNumAdded = true;
                    numbersAndStars.starPos.push((x+i)+""+(y+j));
                    break;
                }                                
            }
            else if (x == 0 || y == 0) {
                if (i == -1) {
                    i = 0
                }
                if (j == -1) {
                    j = 0
                }                
                if (array2d[x+i][y+j] == "*" && starNumAdded == false) {
                    hasStar = true;
                    starNumAdded = true;
                    numbersAndStars.starPos.push((x+i)+""+(y+j));
                    break;
                }                
            }

            else if (x == array2d.length-1 || y == array2d.length-1) {
                if (i == 1) {
                    break;
                }
                if (j == 1) {
                    break
                }
  
                if (array2d[x+i][y+j] == "*" && starNumAdded == false) {
                    hasStar = true;
                    starNumAdded = true;
                    numbersAndStars.starPos.push((x+i)+""+(y+j));
                    break;
                }
                
            }
        }
    }
}
