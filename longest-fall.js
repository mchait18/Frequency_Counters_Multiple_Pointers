// add whatever parameters you deem necessary
function longestFall(arr) {
     // quick fail case if the array is empty
    if (arr.length === 0) return 0
    let max = 0
    let count = 1

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            count++
        }
        else {
            max = count > max ? count : max
            count = 1
        }
    }
    return max > count ? max : count
}
