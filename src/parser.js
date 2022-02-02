import parse from 'multi-number-parse';
import parser from 'number-parsing';


/**
 * Parse BigInt numbers
 * @param {string} input Input BigInt
 * @returns {string} Parsed BigInt
 */

export function parseIt(input) {

    const str = input; 

    var wordArray = [];
    var numArray = [];

    wordArray = str.split('\n');

    let j = 0;

    for(let i = 0; i < wordArray.length; i++){
        var num = parser(wordArray[i]);
        
        if (!Number.isNaN(num)) {
            numArray[j] = parser(wordArray[i]);
            j++;
        }
        //console.log('parsed :>> ', parseIt(wordArray[i]));
    }
    
    // Scientific notation er að koma vitlaust
    // og NaN er að sleppa í gegn
    

    return numArray;
    
}