//Linear search
const array: number[] = [];
document.getElementById("addBtn")?.addEventListener("click", () => {
    const input: number = (<HTMLInputElement>document.getElementById("arrInput"))?.valueAsNumber
    if (!input || typeof input !== "number") {
        alert("Please enter a number!")
    } else {
        array.push(input)
        array.sort() //for some algorithm need sorting
        const div = document.getElementById("arr")
        if (div) {
            div.innerHTML = array.toString()
        }
    }
})
document.getElementById("findBtn")?.addEventListener("click", () => {
    const input: number = (<HTMLInputElement>document.getElementById("findInput"))?.valueAsNumber
    const n: number = array.length
    if (!n) {
        alert("Please enter number in array!")
    } else if (!input || typeof input !== "number") {
        alert("Please enter number to find!")
    } else {
        const result = document.getElementById("result")
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
            let left: number = 0
            let right: number = n - 1
            while (left <= right) {
                let mid: number = Math.floor((left + right) / 2) //ceil: làm tròn lên, round: làm tròn gần nhất
                if (array[mid] === input) {
                    result.innerHTML = "Số cần tìm ở vị trí thứ: " + ++mid
                    return true
                } else if (array[mid] < input) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
            result.innerHTML = "Không tìm thấy vị trí của số cần tìm"

        }
    }
})
