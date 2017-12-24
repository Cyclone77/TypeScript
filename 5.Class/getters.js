//存取器
//typescript 通过getters/setters
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
//静态属性
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
        Grid.origin;
        //this.origin 不能访问
    }
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
//抽象类
//高级技巧
