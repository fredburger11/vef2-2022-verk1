import stats from 'stats-lite';
import parser from 'number-parsing';


/**
 * Parse BigInt numbers
 * @param {string} input Input BigInt
 * @returns {string} Parsed BigInt
 */

export function parseIt(input) {

    const str = input; 

    var wordArray = [];
    const numArray = [];

    wordArray = str.split('\n');

    //let j = 0;

    for(let i = 0; i < wordArray.length; i++){
        const num = parser(wordArray[i]);
        
        if (!Number.isNaN(num)) {
            //const nr = parseFloat(num);
            numArray.push(parser(num));
        }
    }
    
    // Scientific notation er að koma vitlaust

    return numArray;
    
}

export function findVariance(input) {
    return stats.variance(input).toFixed(2);
}

export function findMax(input) { 
    

    var arr = input;
    
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

export function findMean(input) {
    return stats.mean(input).toFixed(2);
}

export function findMedian(input) {
    return stats.median(input).toFixed(2);
}

export function findMin(input) {
    var arr = input;
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

export function findstdev(input) {
    return stats.stdev(input).toFixed(2);
}

export function findSum(input) {
    return stats.sum(input).toFixed(2);
}

export function findRange(input) {
    return (findMax(input) - findMin(input)).toFixed(2);
}

export function strToNumArr(input) {
    var numArr = [];
    for(var i = 0; i < input.length; i++){
        numArr.push(parseFloat(input[i]));
    }
    return numArr;
}

