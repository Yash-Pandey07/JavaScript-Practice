'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    // Sort the array in descending order 
    nums.sort((a, b) => b - a); 
    
    // Find the first unique number 
    let largest = nums[0]; 
    
    // Iterate through the array to find the second largest unique number 
    for (let i = 1; i < nums.length; i++) {
       if (nums[i] < largest) {
         return nums[i]; 
         } 
      } 
      
      // If no second largest number is found, return -1 (or handle as needed) 
      return -1;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}