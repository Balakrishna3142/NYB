

let numbers = [64, 25, 12, 22, 11];

console.log("Original Array:", numbers);

// --------------------------------------------------
// 1. Sorting using built-in sort() method
// --------------------------------------------------

let builtInSorted = [...numbers];

builtInSorted.sort((a, b) => a - b);

console.log("Sorted using built-in sort():", builtInSorted);


// --------------------------------------------------
// 2. Sorting without using built-in sort()
//    Using Bubble Sort
// --------------------------------------------------

let manualSorted = [...numbers];

for (let i = 0; i < manualSorted.length - 1; i++) {
    for (let j = 0; j < manualSorted.length - 1 - i; j++) {

        if (manualSorted[j] > manualSorted[j + 1]) {
            // Swap two elements
            let temp = manualSorted[j];
            manualSorted[j] = manualSorted[j + 1];
            manualSorted[j + 1] = temp;
        }
    }
}

console.log("Sorted without built-in sort():", manualSorted);