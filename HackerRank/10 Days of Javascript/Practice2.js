getName()
//getName2()  //error: Cannot access 'getName2' before initialization
console.log(x)
console.log(getName())
// console.log(getName2())  //error: Cannot access 'getName2' before initialization

var x = 1;

function getName() {
    var name = "John Doe";
    console.log(name);
    // return name;
}

var getName2 = () => {
    var name = "Alex Doe";
    console.log(name);
    // return name;
}