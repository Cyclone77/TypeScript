//接口初探
function _printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var _myObj = {
    size: 10,
    label: "Size 10 Object"
};
_printLabel(_myObj);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
//p1.x = 20;
var a = [1, 2, 3];
var ro = [2, 3];
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error! 把整个ReadonlyArray赋值到一个普通数组也是不可以的
//可以用类型断言重写
a = ro;
a[1] = 10;
//readonly vs const
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
