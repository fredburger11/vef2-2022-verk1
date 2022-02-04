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

export function strToNumArr(input) {
    var numArr = [];
    for(var i = 0; i < input.length; i++){
        numArr.push(parseFloat(input[i]));
    }
    return numArr;
}

