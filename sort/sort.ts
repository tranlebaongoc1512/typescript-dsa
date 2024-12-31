const insertionSort = (a: number[]): number[] => {
    const n: number = a.length
    for (let i = 1; i < n; i++) {
        let j: number = i;
        while (j > 0 && a[j] <= a[j - 1]) {
            let temp: number = a[j];
            a[j] = a[j - 1];
            a[j - 1] = temp;
            j--;
        }
    }
    return a
}

const insertionSort2 = (a: number[]): number[] => {
    const n: number = a.length
    for (let i = 1; i < n; i++) {
        let key = a[i];
        let j: number = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j]
            j--;
        }
        a[j + 1] = key
    }
    return a
}

const selectionSort = (a: number[]): number[] => {
    const n: number = a.length
    for (let i = 0; i < n - 1; i++) {
        let iMin: number = i;
        let vMin: number = a[i];
        for (let j: number = i; j < n; j++) {
            if (a[j] < vMin) {
                vMin = a[j];
                iMin = j
            }
        }
        a[iMin] = a[i]
        a[i] = vMin
    }
    return a
}

const bubbleSort = (a: number[]): number[] => {
    const n: number = a.length
    for (let i = 0; i < n - 1; i++) {
        for (let j: number = 0; j < n; j++) {
            if (a[j] > a[j + 1]) {
                let temp: number = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
            }
        }
    }
    return a
}

const array1: number[] = [9, 4, 6, 8, 5, 3, 8, 2];

const input = document.createElement('h5')
input.innerHTML = "Input array: " + array1.toString()
document.body.appendChild(input);

const result = document.createElement('h5')
result.innerHTML = "Sorted array: " + bubbleSort(array1).toString()
document.body.appendChild(result);