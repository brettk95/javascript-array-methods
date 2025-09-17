// 1. Translate border-left-width to borderLeftWidth

function camelizeString(str) {
    // changes dash-separated words like “my-short-string” into camel-cased “myShortString”
    arrStr = str.split("-")
    firstWord = arrStr[0].toLowerCase()
    restWord = arrStr.slice(1).map(txt => txt.slice(0,1).toUpperCase() + txt.slice(1).toLowerCase())
    return firstWord + restWord.join("")
}


console.log(camelizeString("my-short-string"))


// 2. Filter range
function filterRange(arr, a, b) {
    newArr = arr.filter(num => (num >= a && num <= b))
    return newArr
}

console.log(filterRange([5, 3, 8, 1], 1, 4)) // 3,1 (matching values)

// 3. Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i <= arr.length-1; i++) {
        if (!(arr[i] >= a && arr[i] <= b)) {
            arr.splice(i, 1);   
            i--;
        }
    }
}

let arr = [2, 5, 9, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr);

// 4. Copy and sort array
