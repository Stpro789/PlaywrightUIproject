//while loop to calculate the sum of numbers from 1 to 100
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

console.log("The sum is: " + sum);

//for loop to calculate the sum of numbers from 1 to 100
let sum2 = 0;
for (let j = 1; j <= 100; j++) {
    sum2 += j;
}
console.log("The sum (for loop) is: " + sum2);

// Reverse a number using a for  and whileloop
function reverseWithWhileLoop(num) {
    let reversed = 0;
    
    // Process digits dynamically until the number becomes 0
    while (num > 0) {
        let lastDigit = num % 10;          // Extract the last digit (e.g., 1234 -> 4)
        reversed = (reversed * 10) + lastDigit; // Shift previous digits left and add the new one
        num = Math.floor(num / 10);        // Remove the last digit from original number
    }
    
    return reversed;
}




