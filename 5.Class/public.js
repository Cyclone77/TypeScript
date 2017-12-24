//公共，私有与受保护的修饰符
//默认为 public
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Animal {
//     public name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//private 私有
var Home = /** @class */ (function () {
    function Home(theName) {
        this.name = theName;
    }
    return Home;
}());
var Hours = /** @class */ (function (_super) {
    __extends(Hours, _super);
    function Hours(name) {
        return _super.call(this, name) || this;
    }
    Hours.prototype.getName = function () {
        console.log('name is ${this.name}');
    };
    return Hours;
}(Home));
new Hours('zhangsan').getName();
//protected 受保护的
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal));
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
//理解 protected 一般作用于父类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
//readonly修饰符
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit";
//参数属性
var AnimalNew = /** @class */ (function () {
    function AnimalNew(name) {
        this.name = name;
    }
    AnimalNew.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalNew;
}());
new AnimalNew('dd').name;
