var _a, _b, _c;
(_a = document.getElementById("sortBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b, _c, _d;
    var n = (_a = document.getElementById("nInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
    if (!n || typeof n !== "number") {
        alert("Please enter a number!");
    }
    else {
        disabledAll();
        var array_1 = [];
        (_b = document.getElementById("nInput")) === null || _b === void 0 ? void 0 : _b.setAttribute("disabled", "true");
        (_c = document.getElementById("sortBtn")) === null || _c === void 0 ? void 0 : _c.after("Number of elements:" + n);
        var inputDiv_1 = document.getElementById("inputDiv");
        if (inputDiv_1) {
            inputDiv_1.innerHTML = "<input type=\"number\" id=\"arrInput\" placeholder=\"input array number\" /> <button id=\"addBtn\">Add</button>";
        }
        (_d = document.getElementById("addBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
            var _a;
            var aInput = (_a = document.getElementById("arrInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
            if (!aInput || typeof aInput !== "number") {
                alert("Please enter a number!");
            }
            else {
                array_1.push(aInput);
                var div = document.getElementById("arr");
                if (div) {
                    div.innerHTML = array_1.toString();
                }
                if (array_1.length >= n) {
                    if (inputDiv_1) {
                        inputDiv_1.innerHTML = "";
                    }
                    var result = document.createElement('h5');
                    result.innerHTML = "Sorted array: " + naturalSort(array_1, n).toString();
                    document.body.appendChild(result);
                }
            }
        });
    }
});
var naturalSort = function (arr, n) {
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};
(_b = document.getElementById("expoBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var _a, _b;
    var n = (_a = document.getElementById("nInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
    if (!n || typeof n !== "number") {
        alert("Please enter a number!");
    }
    else {
        disabledAll();
        var inputDiv_2 = document.getElementById("inputDiv");
        if (inputDiv_2) {
            inputDiv_2.innerHTML = "<input type=\"number\" id=\"aInput\" placeholder=\"input number a\" /> <button id=\"saveBtn\">Save</button>";
        }
        (_b = document.getElementById("saveBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            var _a;
            var aInput = (_a = document.getElementById("aInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
            if (!aInput || typeof aInput !== "number") {
                alert("Please enter a number!");
            }
            else {
                if (inputDiv_2) {
                    inputDiv_2.innerHTML = "";
                }
                var result = document.createElement('h5');
                result.innerHTML = aInput + "^" + n + ":" + exponentiation(aInput, n);
                document.body.appendChild(result);
            }
        });
    }
});
var exponentiation = function (a, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= a;
    }
    return result;
};
(_c = document.getElementById("distanceBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var _a, _b, _c, _d;
    var n = (_a = document.getElementById("nInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
    if (!n || typeof n !== "number" || n < 2) {
        alert("Please enter a (n>1)!");
    }
    else {
        disabledAll();
        var array_2 = [];
        (_b = document.getElementById("nInput")) === null || _b === void 0 ? void 0 : _b.setAttribute("disabled", "true");
        (_c = document.getElementById("distanceBtn")) === null || _c === void 0 ? void 0 : _c.after("Number of elements:" + n);
        var inputDiv_3 = document.getElementById("inputDiv");
        if (inputDiv_3) {
            inputDiv_3.innerHTML = "<input type=\"number\" id=\"xInput\" placeholder=\"input number x\" /> <input type=\"number\" id=\"yInput\" placeholder=\"input number y\" /> <button id=\"saveBtn\">Save</button>";
        }
        (_d = document.getElementById("saveBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
            var _a, _b;
            var xInput = (_a = document.getElementById("xInput")) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
            var yInput = (_b = document.getElementById("yInput")) === null || _b === void 0 ? void 0 : _b.valueAsNumber;
            if (!xInput || !yInput || typeof xInput !== "number" || typeof yInput !== "number") {
                alert("Please enter a number!");
            }
            else {
                array_2.push([xInput, yInput]);
                var div = document.getElementById("arr");
                if (div) {
                    div.innerHTML = array_2.map(function (a) { return " {".concat(a[0], ", ").concat(a[1], "}"); }).toString();
                }
                if (array_2.length >= n) {
                    if (inputDiv_3) {
                        inputDiv_3.innerHTML = "";
                    }
                    var result = document.createElement('h5');
                    result.innerHTML = minDistance(array_2, n);
                    document.body.appendChild(result);
                }
            }
        });
    }
});
var minDistance = function (arr, n) {
    var minDis;
    var arrMinDis;
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            if (i !== j) {
                var distance = Math.sqrt((arr[j][0] - arr[i][0]) * (arr[j][0] - arr[i][0]) + (arr[j][1] - arr[i][1]) * (arr[j][1] - arr[i][1]));
                if (!minDis) {
                    minDis = distance;
                    arrMinDis = [arr[i], arr[j]];
                }
                else if (distance < minDis) {
                    minDis = distance;
                    arrMinDis = [arr[i], arr[j]];
                }
            }
        }
    }
    return "Min distance is: ".concat(minDis === null || minDis === void 0 ? void 0 : minDis.toFixed(2), " for pairs of points ").concat(arrMinDis === null || arrMinDis === void 0 ? void 0 : arrMinDis.map(function (a) { return " {".concat(a[0], ", ").concat(a[1], "}"); }).toString());
};
var disabledAll = function () {
    var btnsId = [
        "sortBtn",
        "expoBtn",
        "distanceBtn"
    ];
    for (var i = 0; i < btnsId.length; i++) {
        var element = document.getElementById(btnsId[i]);
        if (element) {
            element.disabled = true;
        }
    }
};
