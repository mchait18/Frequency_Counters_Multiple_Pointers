// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
        else if (arr[left] > 0) left++
        else right--
    }
    return arr


    //What Big O is this?
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         let temp = arr[i]
    //         arr.splice(i, 1)
    //         arr.unshift(temp)
    //     }
    // }
    // return arr
}
