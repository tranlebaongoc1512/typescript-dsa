var _a, _b;
//Linear search
var array = [];
(_a = document.getElementById("addBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    var input = (_a = document.getElementById("arrInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
    if (!input || typeof input !== "number") {
        alert("Please enter a number!");
    }
    else {
        array.push(input);
        array.sort(); //for some algorithm need sorting
        var div = document.getElementById("arr");
        if (div) {
            div.innerHTML = array.toString();
        }
    }
});
(_b = document.getElementById("findBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var _a;
    var input = (_a = document.getElementById("findInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
    var n = array.length;
    if (!n) {
        alert("Please enter number in array!");
    }
    else if (!input || typeof input !== "number") {
        alert("Please enter number to find!");
    }
    else {
        var result = document.getElementById("result");
        if (result) {
            //Linear search
            // for (let i = 0; i < n; i++) {
            //     if (array[i] === input) {
            //         result.innerHTML = "Số cần tìm ở vị trí thứ: " + ++i
            //         return true;
            //     }
            // }
            // result.innerHTML = "Không tìm thấy vị trí của số cần tìm"
            //Setinel search
            // let newArray: number[] = [...array]
            // newArray[n] = input
            // let i: number = 0
            // while (newArray[i] !== input) {
            //     i = i + 1
            // }
            // if (i < n) {
            //     result.innerHTML = "Số cần tìm ở vị trí thứ: " + ++i
            // } else {
            //     result.innerHTML = "Không tìm thấy vị trí của số cần tìm"
            // }
            //Jump search
            // const d: number = 3
            // let i: number = 0
            // let j: number = i + d
            // while (j < n && array[j] < input) {
            //     j = j + d
            //     i = i + d
            // }
            // if (j >= n) {
            //     j = n - 1
            // }
            // while (array[i] < input) {
            //     i = i + 1
            //     if (i >= n || i > j) {
            //         result.innerHTML = "Không tìm thấy vị trí của số cần tìm"
            //     }
            // }
            // if (array[i] == input) {
            //     result.innerHTML = "Số cần tìm ở vị trí thứ: " + ++i
            // } else {
            //     result.innerHTML = "Không tìm thấy vị trí của số cần tìm"
            // }
            //Binary search
            var left = 0;
            var right = n - 1;
            while (left <= right) {
                var mid = Math.floor((left + right) / 2); //ceil: làm tròn lên, round: làm tròn gần nhất
                console.log(mid);
                if (array[mid] === input) {
                    result.innerHTML = "Số cần tìm ở vị trí thứ: " + ++mid;
                    return true;
                }
                else if (array[mid] < input) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
            result.innerHTML = "Không tìm thấy vị trí của số cần tìm";
        }
    }
});
