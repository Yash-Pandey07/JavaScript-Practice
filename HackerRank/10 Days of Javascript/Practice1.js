//How JavaScript Code is executed? ❤️& Call Stack | Namaste JavaScript Ep. 2
                                //Creation phase/ memory phase
var n =2;                       // n: undefined 
function square(num){           //store whole function in variable square
    var  ans = num*num;
    return ans;
}
var squareResult = square(n);   //store squareResult as undefined
var squareResult2 = square(4);  //store squareResult2 as undefined

//Code Execution phase/ code phase
// 1. The variable n is declared and initialized with the value 2.
// 2. Invoking the square function with n as an argument, which is 2.
// 3. Memory phase: The function square is stored in memory with the name square.
// 4. The function square is executed with num as 2, and the result is stored in ans.
// 5. The function returns the value of ans, which is 4.
