//Count Frequency of Each Character Write a program that counts how many times each character occurs in a string.
function countCharacterFrequency(str) {
    const frequency = {};
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
const inputString = "hello world";
const frequency = countCharacterFrequency(inputString);
console.log(frequency); 
const inputString2 = "programming";
const frequency2 = countCharacterFrequency(inputString2);
console.log(frequency2);

