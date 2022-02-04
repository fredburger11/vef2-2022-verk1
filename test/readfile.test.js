import { describe, expect, it } from '@jest/globals';
import { readFiles } from '../src/readfile';

describe('readfile', () => {
  it('reads a file from a directory', () => {
    
    const testing = './testdata';

    return readFiles(testing).then(data => {
        expect(data).toEqual(["testing.txt"]);
    }); 
  });

});