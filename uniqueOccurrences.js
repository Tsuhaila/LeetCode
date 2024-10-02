var uniqueOccurrences = function (arr) {
    let uniqueArr = [...new Set(arr)]
    let matchArr = []
    for (i = 0; i < uniqueArr.length; i++) {
        let count = 0
        for (j = 0; j < arr.length; j++) {
            if (uniqueArr[i] == arr[j]) {
                count++
            }
        }
        matchArr.push(count)
    }
    return matchArr.length === [...new Set(matchArr)].length
};
arr = [1, 2, 2, 1, 1, 3]
console.log(uniqueOccurrences(arr))