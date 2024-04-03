// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let counter1 = 0
    let counter2 = 0
    while (counter1 < str1.length) {
        //looked through the second string and didn't find the substring, return false
        if (counter2 >= str2.length) return false

        if (str1[counter1] !== str2[counter2])
            counter2++
        else {
            counter1++
            counter2++
        }
    }
    return true
}
