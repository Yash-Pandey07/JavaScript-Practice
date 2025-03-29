function x(){
    for(var i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
    console.log("done");
}
// x();
// Output: done 5 5 5 5 5 

// Explanation: The for loop runs 5 times, but the setTimeout function is asynchronous.
// By the time the timeout is executed, the loop has already completed and i is equal to 5.
// To fix this, we can use let instead of var, which creates a new scope for each iteration of the loop.

function y(){
    for(let i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
    console.log("done");
}
// y();
// Output: done 0 1 2 3 4
// Explanation: Using let creates a new scope for each iteration of the loop, so the value of i is preserved for each timeout.
// Therefore, the output is 0, 1, 2, 3, 4 instead of 5.
// Note: The output may not be exactly as shown above due to the asynchronous nature of setTimeout.

function z(){
    for(var i = 0; i < 5; i++){
        // Using IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration
        (function(i){
            setTimeout(function(){
                console.log(i);
            }, 1000);
        })(i);
    }
    console.log("done");
}
// z();
// Output: done 0 1 2 3 4
// Explanation: The IIFE creates a new scope for each iteration of the loop, preserving the value of i for each timeout.
// Therefore, the output is 0, 1, 2, 3, 4 instead of 5.

function a(){
    var x = 10;
    function b(){
        console.log(x); // 10
    }
    return b;
}
console.log(a()()); // Output: 10