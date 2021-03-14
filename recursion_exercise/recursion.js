function productOfArray(numArray) {
    if (numArray.length === 1) {
        return numArray[0]
    } else {
        return numArray.shift() * productOfArray(numArray)
    }
}

function contains(nestedObj, searchTerm) {
    if (Object.values(nestedObj)[0] === searchTerm) {
        return true
    } else if (typeof Object.values(nestedObj)[0] === "object") {
        return contains(Object.values(nestedObj)[0], searchTerm)
    } else {
        return false
    }
}