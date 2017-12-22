//布尔值
var isDone = false;
if (!isDone) {
    console.log('出现错误！');
}
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
//字符串
var name = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//数组
var list;
list = [1, 2, 3];
console.log(list);
var listArr = [1, 2, 3];
console.log(listArr);
var x;
x = ["hello", 1];
console.log(x);
console.log(x[0].substr(1));
//枚举
var Color;
(function(Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//索引从1开始
(function(Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//或者全部手动赋值
(function(Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
(function(Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//Void
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
//Null和Undefined
var u = undefined;
var n = null;
//Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {}
}
//类型断言
//类型断言有两种形式。 其一是“尖括号”语法：

//类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
var someValue = "this is a string";
var strLength = someValue.length;
//另一个为as语法：
var someValue = "this is a string";
var len = someValue.length;
var strLength = someValue.length;