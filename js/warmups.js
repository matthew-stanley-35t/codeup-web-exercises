function howMuch(userObject){
    return userObject.price;
}

function getLongestString(arr){
    let max_str = arr[0].length;
    let longestString = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let newMax = arr[i].length;
        if (newMax > max_str) {
            longestString = arr[i];
            max_str = newMax;
        }
    }
    return longestString;
}

// let sampleArr = ["the", "longest", "string"]
// console.log(getLongestString(sampleArr));