document.getElementById("sortBtn")?.addEventListener("click", () => {
    const n: number = (<HTMLInputElement>document.getElementById("nInput"))?.valueAsNumber
    if (!n || typeof n !== "number") {
        alert("Please enter a number!")
    } else {
        disabledAll()
        const array: number[] = [];
        document.getElementById("nInput")?.setAttribute("disabled", "true")
        document.getElementById("sortBtn")?.after("Number of elements:" + n)
        const inputDiv = document.getElementById("inputDiv")
        if (inputDiv) {
            inputDiv.innerHTML = "<input type=\"number\" id=\"arrInput\" placeholder=\"input array number\" /> <button id=\"addBtn\">Add</button>"
        }
        document.getElementById("addBtn")?.addEventListener("click", () => {
            const aInput: number = (<HTMLInputElement>document.getElementById("arrInput"))?.valueAsNumber
            if (!aInput || typeof aInput !== "number") {
                alert("Please enter a number!")
            } else {
                array.push(aInput)
                const div = document.getElementById("arr")
                if (div) {
                    div.innerHTML = array.toString()
                }
                if (array.length >= n) {
                    if (inputDiv) {
                        inputDiv.innerHTML = ""
                    }
                    const result = document.createElement('h5')
                    result.innerHTML = "Sorted array: " + naturalSort(array, n).toString()
                    document.body.appendChild(result);
                }
            }
        })
    }
})
const naturalSort = (arr: number[], n: number): number[] => {
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}
document.getElementById("expoBtn")?.addEventListener("click", () => {
    const n: number = (<HTMLInputElement>document.getElementById("nInput"))?.valueAsNumber
    if (!n || typeof n !== "number") {
        alert("Please enter a number!")
    } else {
        disabledAll()
        const inputDiv = document.getElementById("inputDiv")
        if (inputDiv) {
            inputDiv.innerHTML = "<input type=\"number\" id=\"aInput\" placeholder=\"input number a\" /> <button id=\"saveBtn\">Save</button>"
        }
        document.getElementById("saveBtn")?.addEventListener("click", () => {
            const aInput: number = (<HTMLInputElement>document.getElementById("aInput"))?.valueAsNumber
            if (!aInput || typeof aInput !== "number") {
                alert("Please enter a number!")
            } else {
                if (inputDiv) {
                    inputDiv.innerHTML = ""
                }
                const result = document.createElement('h5')
                result.innerHTML = aInput + "^" + n + ":" + exponentiation(aInput, n)
                document.body.appendChild(result);
            }
        })
    }
})
const exponentiation = (a: number, n: number): number => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= a
    }
    return result
}
document.getElementById("distanceBtn")?.addEventListener("click", () => {
    const n: number = (<HTMLInputElement>document.getElementById("nInput"))?.valueAsNumber
    if (!n || typeof n !== "number" || n < 2) {
        alert("Please enter a (n>1)!")
    } else {
        disabledAll()
        const array: Array<number>[] = [];
        document.getElementById("nInput")?.setAttribute("disabled", "true")
        document.getElementById("distanceBtn")?.after("Number of elements:" + n)
        const inputDiv = document.getElementById("inputDiv")
        if (inputDiv) {
            inputDiv.innerHTML = "<input type=\"number\" id=\"xInput\" placeholder=\"input number x\" /> <input type=\"number\" id=\"yInput\" placeholder=\"input number y\" /> <button id=\"saveBtn\">Save</button>"
        }
        document.getElementById("saveBtn")?.addEventListener("click", () => {
            const xInput: number = (<HTMLInputElement>document.getElementById("xInput"))?.valueAsNumber
            const yInput: number = (<HTMLInputElement>document.getElementById("yInput"))?.valueAsNumber
            if (!xInput || !yInput || typeof xInput !== "number" || typeof yInput !== "number") {
                alert("Please enter a number!")
            } else {
                array.push([xInput, yInput])
                const div = document.getElementById("arr")
                if (div) {
                    div.innerHTML = array.map(a => ` {${a[0]}, ${a[1]}}`).toString()
                }
                if (array.length >= n) {
                    if (inputDiv) {
                        inputDiv.innerHTML = ""
                    }
                    const result = document.createElement('h5')
                    result.innerHTML = minDistance(array, n)
                    document.body.appendChild(result);
                }
            }
        })
    }
})
const minDistance = (arr: Array<number>[], n: number): string => {
    let minDis: number | undefined;
    let arrMinDis: Array<number>[] | undefined
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i !== j) {
                const distance = Math.sqrt((arr[j][0] - arr[i][0]) * (arr[j][0] - arr[i][0]) + (arr[j][1] - arr[i][1]) * (arr[j][1] - arr[i][1]))
                if (!minDis) {
                    minDis = distance
                    arrMinDis = [arr[i], arr[j]]
                } else if (distance < minDis) {
                    minDis = distance
                    arrMinDis = [arr[i], arr[j]]
                }
            }
        }
    }
    return `Min distance is: ${minDis?.toFixed(2)} for pairs of points ${arrMinDis?.map(a => ` {${a[0]}, ${a[1]}}`).toString()}`
}
const disabledAll = () => {
    const btnsId = [
        "sortBtn",
        "expoBtn",
        "distanceBtn"
    ]
    for (let i = 0; i < btnsId.length; i++) {
        let element = <HTMLButtonElement>document.getElementById(btnsId[i])
        if (element) {
            element.disabled = true
        }
    }
}