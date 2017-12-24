//公共，私有与受保护的修饰符
//默认为 public

// class Animal {
//     public name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

//private 私有

class Home {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Hours extends Home {
    constructor(name: string) {
        super(name);
    }

    getName() {
        console.log('name is ${this.name}');
    }
}
new Hours('zhangsan').getName();

//protected 受保护的
class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal {
    constructor() {
        super('Rhino');
    }
}

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
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

//readonly修饰符
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit";

//参数属性

class AnimalNew {
    constructor(public name: string) {}
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
new AnimalNew('dd').name;

