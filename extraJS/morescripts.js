// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].


function swapTowardCenter(arr) {
    for (i = 0; i < arr.length/2; i+=2){
        var temp = arr[i]; // create a temp array to store the items while we manipulate
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6]))

// go through the array but only 1/2 as to not mix up the numbers
// index 0, 2, 4, 6


// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

function previousLengths(arr) {
    for (var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLengths(["Hello", "Out", "There", "What's", "Going", "on"]))

// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr) {
    
}

console.log(reverse([1,2,3,4,5,6]))