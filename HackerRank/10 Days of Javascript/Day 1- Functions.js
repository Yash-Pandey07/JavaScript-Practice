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
/*
 * Create the function factorial here
 */
let m = 0;
function factorial (n) { 
    // Base case: if n is 0, return 1 
    if (n === 0 || n===1) { return 1; } 
    // Recursive case: n * factorial of (n-1) 
    return n * factorial(n - 1);
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}