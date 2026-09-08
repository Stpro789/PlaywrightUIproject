//Check Even or Odd Write a program that accepts a number and checks whether it is even or odd.
/*const number = prompt("Enter a number: ");*/

//check if the number is even
const number = parseInt(input);
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

//Dynamic way to check even or odd number using readline module in Node.js
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkEvenOdd(number) {
    if(number % 2 == 0) {
        console.log("The number " + number + " is even.");
    } else {
        console.log("The number " + number + " is odd.");
    }
}

function askForNumber() {
    rl.question('Enter a number (or "exit" to quit): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            rl.close();
            return;
        }

        const number = parseInt(input);
        if (isNaN(number)) {
            console.log('Please enter a valid number.');
        } else {
            checkEvenOdd(number);
        }

        askForNumber(); // Ask again for another number
    });
}

// Start the interactive program
askForNumber();
*/