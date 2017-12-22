//接口初探

function _printLabel(labelledObj:{ label: string}){
    console.log(labelledObj.label);
}

let _myObj ={
    size: 10,
    label: "Size 10 Object"
};

_printLabel(_myObj);

//接口引入
//我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
interface LabelledValue {
    label: string;
    size: any;
}

function printLabel(labelledObj: LabelledValue){
    console.log(labelledObj.label);
}

let myObj ={
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);

//可选属性
interface SquareConfig {
    width?: number;
    color?: string;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});

//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20};
//p1.x = 20;

let a: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = [2, 3];
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error! 把整个ReadonlyArray赋值到一个普通数组也是不可以的
//可以用类型断言重写
a = <number[]>ro;
a[1] = 10;

//readonly vs const
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
