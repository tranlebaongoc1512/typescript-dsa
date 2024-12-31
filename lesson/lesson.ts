const mess: string = 'Hello world!';
//do khai báo bên ngoài hàm nên là biến global, TS quét trên các tab đang mở và báo lỗi scope nếu trùng
//var: global scope, và luôn đưa lên khởi tạo đầu khi thực thi
//let: block scope, tạo trong block thì k sử dụng đc bên ngoài
//const: block scope, k thể tái khai báo hay cập nhật giá trị mới, có thể cập nhật giá trị thuộc tính nếu kiểu reference (obj, arr, func)
console.log(mess);

//object
// let person: object
let person: {
    name: string,
    age: number
} = {
    name: "Ngoc",
    age: 25
}
// person.address = "Dalat" //error

//array
let arr: number[] = [1, 2, 3]
arr.push(3)

let arr1: (string | number)[] = [1, 'a', 2]

//tuple
let tup: [string, number, boolean?] = ['a', 25, true]

//enums
enum API_STATUS {
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
}
let en = API_STATUS.FULFILLED

const enFunc = (s: API_STATUS) => { }
// enFunc("PENDING") //error
enFunc(API_STATUS.FULFILLED)

//any type
let anyType: any = 'a'
anyType = 1
anyType = true

//void type
const sum = (a: number, b: number): number => {
    return a + b
}
const logMsg = (msg: string): void => {
    console.log(msg)
}

//never type
function handleException(msg: string): never {
    throw new Error(msg)
}
function doingForever(): never {
    while (true) {
        console.log('Always running')
    }
}

//union type
function sum2(a: lessonType, b: number | string): number | string {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    throw new Error("Invalid arguments")
}

//type aliases
type lessonType = number | string

// if else
let num: number = 0;
if (num) {
    console.log("a")
} else {
    console.log("b")
}

//switch case
let age: number = 20;
switch (age) {
    case 19:
    case 20:
        console.log("Học") // 19 hay 20 đều chạy dòng này
        break; //chạy tới khi có break
    case 21:
        console.log("Làm")
        break;
    default:
        break;
}

//loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i1 = 0
for (; i1 < 10; i1++) {
    console.log(i1)
}

for (let i2 = 0; ; i2++) {
    console.log(i2)
    if (i2 > 9) {
        break; //k có là nó chạy vô hạn
    }
}

let i3 = 0
for (; ;) {
    console.log(i3)
    i3++;
    if (i3 > 9) {
        break;
    }
}

//while
let count: number = 0
while (true) {
    console.log(count)
    if (count % 2 === 0) {
        break; //k biết lặp bao nhiêu lần, chỉ quan tâm khi nào cần out ra
    }
    count++;
}

//do while
let count2: number = 0
do {
    console.log(count)
    if (count2 % 2 === 0) {
        break; //k biết lặp bao nhiêu lần, chỉ quan tâm khi nào cần out ra
    }
    count++;
} while (count2 < 5);

//continue
for (let i = 0; i < i++; i++) {
    if (i % 2 === 1) {
        continue; //bỏ qua 1 lần chạy (đoạn code đằng sau continue)
    }
    console.log(i)
}

//optional parameters
const sum3 = (x: number, y: number, z?: number): number => {
    if (z) {
        return x + y + z
    }
    return x + y
}

//default parameters
const sum4 = (x: number, y: number, z = false): number => {
    if (z === false) {
        return x + y
    }
    return x - y
}

//rest parameters
const sum5 = (...nums: number[]): number => {
    let total = 0;
    nums.forEach(n => total += n);
    return total
}

//function overloading (viết các hàm giống nhau, và có 1 hàm duy nhất có return để cộng gộp kết quả)
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
    return a + b;
}
class Counter {
    private current: number = 0;
    count(): number
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start)
            }
            return values
        }
        return ++this.current
    }
}
let counter = new Counter()
console.log(counter.count()) //return a number
console.log(counter.count(20)) //return an array

//class
class Employee {
    private name: string;
    protected age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
}
class SaleEmployee extends Employee {
    public readonly department: string;
    constructor(name: string, age: number, department: string) {
        super(name, age);
        this.department = department;
    }
    // public getName(): string {
    //     return this.name; //error private
    // }
    public getAge(): number {
        return this.age; //protected
    }
}

const emp = new SaleEmployee("Jane", 20, "Sales");
// console.log(emp.name); //error private
emp.setName("John")
console.log(emp.getName());
// console.log(emp.age);//eror protected 
console.log(emp.department);
// emp.department = "Sales2" //error readonly

//getter setter
//đổi thành
class Employee2 {
    private _name: string;

    public constructor(_name: string) {
        this._name = _name;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}
const emp2 = new Employee2("Jane");
emp2.name = "Josh";
console.log(emp2.name);

//static
class Circle {
    static pi: number = 3.14;
    public test: number = 5;
    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}
console.log(Circle.calculateArea(10))
console.log(Circle.pi);
// console.log(Circle.test); //error, phải tạo obj new Circle r mới lấy đc

//abstract class
abstract class Employee3 {
    //abstract method
    abstract getSalary(): number

    //normal method
    sayHi(): void {
        console.log("Hello")
    }

}
// const emp3 = new Employee3() //error abstract method
class HrEmployee extends Employee3 {
    getSalary(): number {
        return 1000
    }
}

//interface
interface IEmployee {
    name: string
    age?: number
    getSalary(): number;
}
function getName(person: IEmployee) {
    return person.name
}
//interface có thể cộng gộp