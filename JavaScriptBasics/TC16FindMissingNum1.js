function missingNum(arr) {
    let n = arr.length + 1;

    // Create hash array of size n+1
    let hash = new Array(n + 1).fill(0);

    // Store frequencies of elements
    for (let i = 0; i < n - 1; i++) {
        hash[arr[i]]++;
    }

    // Find the missing number
    for (let i = 1; i <= n; i++) {
        if (hash[i] === 0) {
            return i;
        }
    }
    return -1;
}

// driver code
const arr = [1, 2, 3, 4, 6];
const res = missingNum(arr);
console.log(res);