// let 申明

let hello = "hello";
//块级作用域
function f(input: boolean){
    let a = 100;
    if (input){
        let b = a+1;
    }
    return b;
}

f(true);

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e);