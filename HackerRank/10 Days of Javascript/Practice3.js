var x =1;
a();
b();

console.log(x); // 1
// console.log(a()); // 10
// console.log(b()); // 20

function a() {
    var x = 10;
    console.log(x); // 10
}

function b() {
    var x = 100;
    console.log(x); // 20
}
