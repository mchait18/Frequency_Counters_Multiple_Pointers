// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if (letters.length === 0) return false
    let msgCounter = createFrequencyCounter(msg)
    let lettersCounter = createFrequencyCounter(letters)
    for (let key of msgCounter.keys()) {
        if (lettersCounter.get(key) < msgCounter.get(key)) return false
    }
    return true
}

function createFrequencyCounter(array) {
    let frequencies = new Map();

    for (let val of array) {
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }

    return frequencies;
}
