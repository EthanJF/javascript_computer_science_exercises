function productOfArray(numArray){
    if(numArray.length === 1){
        return numArray[0]
    } else {
        return numArray[0] * productOfArray(numArray.shift())
    }
}