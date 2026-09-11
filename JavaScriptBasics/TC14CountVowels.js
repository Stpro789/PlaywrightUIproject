const vowels = ["a", "e", "i", "o", "u"];

function countVowel(result) {
    let count = 0;

    // Check each character in the string
    for (let letter of result.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}

console.log(countVowel("Hello World")); // 3