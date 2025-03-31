function secondSmallest (arr){

    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second === Number.MAX_VALUE ? -1 : second;
    // return second;
}

// console.log(secondSmallest([1, 2, 3, 4, 5])); // Output: 2
// console.log(secondSmallest([5, 5, 5, 5])); // Output: -1

str1 = "Yash Padney"
str2 = str1.toLowerCase().split(" ").reverse().join(" ");
// console.log(str2); // Output: "padney yash"

str3 = str1.toLowerCase().split('').sort().join('');
// console.log(str3); // Output: "aadehnpy"
// console.log(str1.toLowerCase().split('').sort().join('') === str3); // Output: true

//Count Occurrences of a Character
function countChar(str, char) {
    return str.split('').filter(c => c === char).length; 
}

// console.log(countChar("programming", "m")); // Output: 2
// console.log(countChar("hello world", "l")); // Output: 3

//Remove Duplicate Characters from a String
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

// console.log(removeDuplicates("banana")); // Output: "ban"

const a = [1, 2, 3, 5];
// console.log(a.length);
function findMissing(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissing([1,2,3,4,5,7,8,9])); // Output: 6

