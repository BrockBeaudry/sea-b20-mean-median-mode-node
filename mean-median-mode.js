// Parse the numbers from the command line arguments.
var numbers = process.argv.splice(2).map(Number);

// Sort in ascending order.
numbers.sort(function (a, b) { return a - b; });

console.log(numbers);

console.log('Mean: ' + mean(numbers) + '\nMedian: ' + median(numbers) + 
    '\nMode: ' + mode(numbers));

// Returns the average value from an array of numbers.
function mean(numbers) {
    var sum = 0;

    numbers.forEach(function(number) {
        sum += number;
    });

    return sum / numbers.length;
}

// Returns the middle number of an array.
function median(numbers) {
    var middle = Math.floor(numbers.length / 2);

    // If there is an even amount of numbers
    if(numbers.length % 2 === 0) {
        // Find the median by averaging the two middle numbers.
        return ((numbers[middle] + numbers[middle + 1]) / 2)
    } else {
        return numbers[middle];
    }
}

// Returns the most common number in an array or false if no element is repeated.
function mode(numbers) {
    var bucket = {};
    var maxCount = 0;
    var result;

    numbers.forEach(function(number) {
        // Initialze the number count to 0, then increment it after subsequent hits.
        bucket[number] >= 0 ? bucket[number]++ : bucket[number] = 0;

        if(bucket[number] > maxCount)
            result = bucket[number];
    });

    return result || false;
}