
/*
 * IT103 Week 7 - Reusable Function Library
 * Author: John Oliver Ebarat
 * Purpose: Demonstrate mathematical, string, and data-processing functions.
 */

// function of math
// Purpose: Computes the average of three numbers.
// Parameters: a, b, c (numbers)
// Returns: Average as a number or an error message.

function computeAverage(a, b, c) {
    if (
        typeof a !== 'number' ||
        typeof b !== 'number' ||
        typeof c !== 'number'
    ) {
        return 'Numbers only';
    }

    return Number(((a + b + c) / 3).toFixed(2));
}

// fuction of string
// Purpose: Formats a person's name.
// Parameters: first (string), last (string)
// Returns: Formatted full name as a string.

function formatName(first, last) {
    return `${last.toUpperCase()}, ${first}`;
}

// function of data processing
// Purpose: Counts the number of passing scores.
// Parameters: scores (array), passingMark (number)
// Returns: Number of passing students.

function countPassing(scores, passingMark = 75) {
    let count = 0;

    for (const score of scores) {
        if (score >= passingMark) {
            count++;
        }
    }

    return count;
}

// TEST VALUES
console.log(computeAverage(88, 92, 79));
console.log(formatName('John Oliver', 'Ebarat'));
console.log(countPassing([88, 62, 95, 74, 81]));
