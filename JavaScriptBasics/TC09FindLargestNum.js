//Find the Largest Number Write a program to find the largest number among three numbers
/*const num1 = prompt("Enter first number: ");
const num2 = prompt("Enter second number: ");
const num3 = prompt("Enter third number: ");
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log("The largest number is: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("The largest number is: " + num2);
    } else {
        console.log("The largest number is: " + num3);
    }
}

function askForNumbers() {
    rl.question('Enter first number: ', (input1) => {
        rl.question('Enter second number: ', (input2) => {
            rl.question('Enter third number: ', (input3) => {
                const number1 = parseInt(input1);
                const number2 = parseInt(input2);
                const number3 = parseInt(input3);

                if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
                    console.log('Please enter valid numbers.');
                } else {
                    findLargestNumber(number1, number2, number3);
                }

                rl.question('Do you want to continue? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                        askForNumbers();
                    } else {
                        console.log('Thank you!');
                        rl.close();
                    }
                });
            });
        });
    });
}

// Start the interactive program
askForNumbers();