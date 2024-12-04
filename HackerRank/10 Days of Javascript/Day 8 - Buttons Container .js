// html
// <!DOCTYPE html>
// <html>
//     <head>
//         <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
//     </head>
//     <body>
//         <div id="btns">
//             <button id="btn1">1</button>
//             <button id="btn2">2</button>
//             <button id="btn3">3</button>
//             <button id="btn4">4</button>
//             <button id="btn5">5</button>
//             <button id="btn6">6</button>
//             <button id="btn7">7</button>
//             <button id="btn8">8</button>
//             <button id="btn9">9</button>
//         </div>
//         <script src="js/buttonsGrid.js" type="text/javascript"></script>
//     </body>
// </html>


//css

// #btns {
//     width: 50%;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
// }
// button {
//     width: 100%;
//     height: 48px;
//     font-size: 24px;
// }


document.getElementById('btn5').onclick = function() {
    let btn1 = document.getElementById('btn1').innerHTML;
    let btn2 = document.getElementById('btn2').innerHTML;
    let btn3 = document.getElementById('btn3').innerHTML;
    let btn4 = document.getElementById('btn4').innerHTML;
    let btn6 = document.getElementById('btn6').innerHTML;
    let btn7 = document.getElementById('btn7').innerHTML;
    let btn8 = document.getElementById('btn8').innerHTML;
    let btn9 = document.getElementById('btn9').innerHTML;

    document.getElementById('btn1').innerHTML = btn4;
    document.getElementById('btn2').innerHTML = btn1;
    document.getElementById('btn3').innerHTML = btn2;
    document.getElementById('btn4').innerHTML = btn7;
    document.getElementById('btn6').innerHTML = btn3;
    document.getElementById('btn7').innerHTML = btn8;
    document.getElementById('btn8').innerHTML = btn9;
    document.getElementById('btn9').innerHTML = btn6;
}
