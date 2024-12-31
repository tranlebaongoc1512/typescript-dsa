var insertionSort = function (a) {
    var n = a.length;
    for (var i = 1; i < n; i++) {
        var j = i;
        while (j > 0 && a[j] <= a[j - 1]) {
            var temp = a[j];
            a[j] = a[j - 1];
            a[j - 1] = temp;
            j--;
        }
    }
    return a;
};
var insertionSort2 = function (a) {
    var n = a.length;
    for (var i = 1; i < n; i++) {
        var key = a[i];
        var j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
};
var selectionSort = function (a) {
    var n = a.length;
    for (var i = 0; i < n - 1; i++) {
        var iMin = i;
        var vMin = a[i];
        for (var j = i; j < n; j++) {
            if (a[j] < vMin) {
                vMin = a[j];
                iMin = j;
            }
        }
        a[iMin] = a[i];
        a[i] = vMin;
    }
    return a;
};
var bubbleSort = function (a) {
    var n = a.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    return a;
};
var array1 = [9, 4, 6, 8, 5, 3, 8, 2];
var input = document.createElement('h5');
input.innerHTML = "Input array: " + array1.toString();
document.body.appendChild(input);
var result = document.createElement('h5');
result.innerHTML = "Sorted array: " + bubbleSort(array1).toString();
document.body.appendChild(result);
