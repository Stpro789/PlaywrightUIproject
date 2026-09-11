// Find Duplicate Elements in an Array Write a program to find all duplicate values in an array.
/*function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();
    for (const value of arr) {
        if (seen.has(value) && !duplicates.includes(value)) {
            duplicates.push(value);
        } else {
            seen.add(value);
        }
    }
    return duplicates;
}*/

const arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1];
const duplicates = findDuplicates(arr);
if (duplicates.length > 0) {
    console.log('Duplicate values in the array are: ' + duplicates.join(', '));
} else {
    console.log('No duplicate values found in the array.');
}

/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
    output: process.stdout
    //console.log('Enter an array of numbers (comma-separated): ');

});*/

/*
rl.question('Enter an array of numbers (comma-separated): ', (input) => {
    const arr = input.split(',').map(Number);
    const duplicates = findDuplicates(arr);
    if (duplicates.length > 0) {
        console.log('Duplicate values in the array are: ' + duplicates.join(', '));
    } else {
        console.log('No duplicate values found in the array.');
    }
    rl.close();
});

*/
