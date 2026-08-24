const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a 4-digit number: ', (input) => {
    let num = parseInt(input, 10);

    // Validate if input is a valid 4-digit number
    if (isNaN(num) || num < 1000 || num > 9999) {
        console.log('Please enter a valid 4-digit number.');
    } else {
        let reversedNum = 0;
        let temp = num;

        // Execute loop until the number becomes 0
        while (temp > 0) {
            let lastDigit = temp % 10;                  // Extract the last digit
            reversedNum = (reversedNum * 10) + lastDigit; // Build the reversed number
            temp = Math.floor(temp / 10);               // Remove the last digit
        }

        console.log('Original Number:', num);
        console.log('Reversed Number (while loop):', reversedNum);
    }

    rl.close();
});

//reversing a string using for loop 

let str = "Javascript";
let reversedString = "";
let length = str.length;

for (let i = length - 1; i >= 0; i--) {
    reversedString += str[i];
}   

console.log("Reversed string is: " + reversedString);



