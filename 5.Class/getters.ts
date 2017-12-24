//存取器
//typescript 通过getters/setters
let passcode = "secret passcode";

class Employee {
    private _fullName: string;
    
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();

employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}

//静态属性
class Grid {
    static origin = {x: 0, y: 0};
    constructor (public scale: number) {
        Grid.origin;
        //this.origin 不能访问
    }
}

//抽象类

//高级技巧
