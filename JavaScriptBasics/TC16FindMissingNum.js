//Find Missing Number You are given an array containing numbers from 1 to N, but one number is missing.
function findMissingNumber(arr, N) {
    const expectedSum = (N * (N + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
const arr = [1, 2, 3, 4, 5, 6, 8];
const N = 8; // The array should contain numbers from 1 to 6
const missingNumber = findMissingNumber(arr, N);
console.log('The missing number is: ' + missingNumber); // Output: The missing number is: 3