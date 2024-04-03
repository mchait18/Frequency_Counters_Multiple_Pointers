// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {

    let int1frequencies = {};
    let int2frequencies = {};

    for (let val of int1.toString()) {
        int1frequencies[val] = ++int1frequencies[val] || 1;
    }
    for (let val of int2.toString()) {
        int2frequencies[val] = ++int2frequencies[val] || 1;
    }
    for (let key in int1frequencies) {
        if (int1frequencies[key] !== int2frequencies[key]) return false
    }
    return true
}
