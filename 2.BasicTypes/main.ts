//布尔值
let isDone: boolean = false;

if (!isDone){
    console.log('出现错误！');
}

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(decLiteral);

//字符串
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

//数组
let list: number[];
list = [1,2,3];
console.log(list);

let listArr: Array<number> = [1,2,3];
console.log(listArr);

let x: [string, number];
x = ["hello", 1];
console.log(x);
console.log(x[0].substr(1));

//枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
//索引从1开始
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
//或者全部手动赋值
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//Void
function warnUser():void(){
    alert("This is my warning message");
}

let unusable: void = undefined;

//Null和Undefined

let u: undefined = undefined;
let n: null = null;

//Never

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//类型断言
//类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";
let strLength: number = (<string> someValue).length;

//另一个为as语法：
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;