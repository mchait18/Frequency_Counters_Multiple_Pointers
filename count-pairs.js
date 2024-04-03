// add whatever parameters you deem necessary
function countPairs(intArr, num) {
    let pairCounter = 0
    let i = 0
    let j = 1
    while (i < intArr.length - 1) {
        if (j === intArr.length) {
            i++
            j = i + 1
        }
        if (intArr[i] + intArr[j] === num) {
            pairCounter++
        }
        j++
    }
    return pairCounter
}
