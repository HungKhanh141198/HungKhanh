var numbers = ["1", "50", "28", "2", "5", "103", "496", "105", "108", "25", "36", "6", "50", "53", "289", "1003", "472", "105", "3", "899", "692", "1000", "289", "103"]

// remove duplicates and calucalate sum
const removed = numbers.filter((c, index) => {
        return numbers.indexOf(c) === index
    }

)

function removeDuplicates() {

    return removed
}

console.log(removeDuplicates())

function sumCal() {    
    let sum = 0;    
    for (let i = 0; i < removed.length - 1; i++) {         sum += parseInt(removed[i]);     }         
    return sum;
} 
console.log(sumCal())

// Find odd
function findOdd() {
    let oddNumbers = numbers.filter((elements) => {
            return elements % 2 !== 0
        }

    )
    return oddNumbers
}
console.log(findOdd())
    // Find even
function findEven() {
    let evenNumbers = numbers.filter((elements) => {
            return elements % 2 === 0
        }

    )
    return evenNumbers
}
console.log(findEven())
    // Sort Ascending Array
var numArray = [1, 50, 28, 2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103]
numArray.sort(function(a, b) {
    return a - b;
});

console.log(numArray);

// find prime 
var primenumArray = [1, 50, 28, 2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103]
primenumArray = primenumArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
});

console.log(primenumArray);