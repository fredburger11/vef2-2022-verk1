import { describe, expect, it } from '@jest/globals';
import { parseIt, strToNumArr } from '../src/parser';

describe('parser', () => {
  it('parses a string', () => {
    const input = "1\n2\n3\n4\n28.297.200,123\n# Comment\nEkki comment";

    const parsed = parseIt(input);
    //console.log('parsed :>>', parsed);

    expect(parsed).toEqual([ 1, 2, 3, 4, 28297200.123 ]);

    
  });

  it('parses an array of str', () => {
    const input = [ "1", "2", "3", "4", "28297200.123" ];

    const numParsed = strToNumArr(input);

    expect(numParsed).toEqual([ 1, 2, 3, 4, 28297200.123 ]);

    
  });

});