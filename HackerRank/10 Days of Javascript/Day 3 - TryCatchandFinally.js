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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let reverseString = s.split('').reverse().join('');
        console.log(reverseString);
    }catch(e){
        // If an exception is thrown, print the exception's message 
        console.log(e.message); 
        // Print the original string 
        console.log(s);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}