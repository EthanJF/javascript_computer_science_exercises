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

function search(array, value){
    let arrayCopy = [...array]
    let i = 0
    function helperSearch(arr, index){
        if(arr[index] === value){
            return index
        } else if(index < arr.length) {
            index++
            return helperSearch(arr, index)
        } else {
            return -1
        }
    }
    return helperSearch(arrayCopy, i)
}

function binarySearch(array, value){
    let arrayToObject = {}
    for(let i = 0; i < array.length; i++){
        arrayToObject[array[i]] = i
    }
    let sortedArrayCopy = [...array].sort()
    function helpSearch(array){
        if(array.length === 1 && array[0] === value){
            return true
        } else if (array.length === 1 && array[0] !== value){
            return false
        }
        else if(array[Math.ceil(array.length/2)] >= value){
            helpSearch(array.slice(0, Math.ceil(array.length / 2)))
        } else {
            helpSearch(array.slice(Math.ceil(array.length / 2), array.length))
        }
    }

    if(helpSearch(sortedArrayCopy)){
        return arrayToObject[value]
    } else {
        return -1
    }
}