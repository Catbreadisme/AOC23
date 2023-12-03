/*
For example, the record of a few games might look like this:

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

In game 1, three sets of cubes are revealed from the bag (and then put back again). 
The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.

The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. 
However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; 
similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. 
If you add up the IDs of the games that would have been possible, you get 8.

Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes.
What is the sum of the IDs of those games?
*/

const fs = require("fs");
const readline = require("readline");
const filestream = fs.createReadStream("./Day 2/2.txt");

const rd = readline.createInterface({
    input: filestream,
    output: process.stdout,
    console: false
});

let lineNum = 0;
let idSum = 0;
let idNumber = 0;

let redCheck = true;
let greenCheck = true;
let blueCheck = true;

rd.on('line', function(line){
    redCheck = true;
    greenCheck = true;
    blueCheck = true;
    lineNum++;

    line = line.replaceAll(";","")
    line = line.replaceAll(",","")
    
    let arr = line.split(" ");
    idNumber = arr[1].replace(":","");

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] > 12 && arr[i+1] == "red"){
            redCheck = false;
            break;
        }
        else if(arr[i] > 13 && arr[i+1] == "green"){
            greenCheck = false;
            break;
        }
        else if(arr[i] > 14 && arr[i+1] == "blue"){
            blueCheck = false
            break;
        }
        
    }
    if(redCheck && greenCheck && blueCheck){
        idSum += lineNum;
    }
    //console.log(redCheck, greenCheck, blueCheck, lineNum, idSum)
});

rd.on('close', function(){
    console.log(idSum)
    console.log("Done");
});
