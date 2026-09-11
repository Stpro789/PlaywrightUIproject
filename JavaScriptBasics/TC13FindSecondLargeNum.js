
// Find the Second Largest Number
// Write a program to find the second-largest unique number in an array without using a built-in sorting method.
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}

require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
}).question('Enter an array of numbers (comma-separated): ', (input) => {
    const arr = input.split(',').map(Number);
    const secondLargest = findSecondLargest(arr);
    if (secondLargest !== null) {
        console.log('The second largest unique number is: ' + secondLargest);
    } else {
        console.log('There is no second largest unique number in the array.');
    }
    process.exit(0);
});
