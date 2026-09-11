//Check Palindrome Write a program to check whether a string is a palindrome.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  
});

rl.question('Enter a string: ', (input) => {
    if (isPalindrome(input)) {
        console.log(`"${input}" is a palindrome.`);
    } else {
        console.log(`"${input}" is not a palindrome.`);
    }
    rl.close();
});

