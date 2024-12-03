// index.html
/*
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/button.css" type="text/css">
</head>
<body>
    <button id="btn">0</button>
    <script src="js/button.js" type="text/javascript"></script>
</body>
</html>

*/



// // js code
// var counter = 0;
// var btn = document.getElementById('btn');

// btn.onclick = function(){
//     counter++;
//     btn.innerHTML = counter.toString();
// }


// Button container exercise

//css/button.css
/*
#btn {
    width: 96px;
    height: 48px;
    font-size: 24px;
}

*/


//js/button.js
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('btn');
    button.addEventListener('click', () => {
        button.innerHTML = parseInt(button.innerHTML) + 1;
    });
});
