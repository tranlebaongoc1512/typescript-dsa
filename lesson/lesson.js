var mess = 'Hello world!';
//do khai báo bên ngoài hàm nên là biến global, TS quét và báo lỗi scope nếu trùng
console.log(mess);
//object
// let person: object
var person = {
    name: "Ngoc",
    age: 25
};
// person.address = "Dalat" //error
//array
var arr = [1, 2, 3];
arr.push(3);
var arr1 = [1, 'a', 2];
//tuple
var tup = ['a', 25, true];
//enums
var API_STATUS;
(function (API_STATUS) {
    API_STATUS["PENDING"] = "PENDING";
    API_STATUS["FULFILLED"] = "FULFILLED";
    API_STATUS["REJECTED"] = "REJECTED";
})(API_STATUS || (API_STATUS = {}));
var en = API_STATUS.FULFILLED;
var enFunc = function (s) { };
// enFunc("PENDING") //error
enFunc(API_STATUS.FULFILLED);
//any type
var anyType = 'a';
anyType = 1;
anyType = true;
//void type
var sum = function (a, b) {
    return a + b;
};
var logMsg = function (msg) {
    console.log(msg);
};
//never type
function handleException(msg) {
    throw new Error(msg);
}
function doingForever() {
    while (true) {
        console.log('Always running');
    }
}
//union type
function sum2(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
// if else
var num = 0;
if (num) {
    console.log("a");
}
else {
    console.log("b");
}
//switch case
var age = 20;
switch (age) {
    case 19:
    case 20:
        console.log("Học"); // 19 hay 20 đều chạy dòng này
    case 21:
        console.log("Làm");
        break;
    default:
        break;
}
