import { describe, expect, it } from '@jest/globals';
import { readFiles } from '../readfile';

describe('readfile', () => {
  it('reads a file from a directory', () => {
    const testing = './src/test/testdata';

    return readFiles(testing).then((data) => {
      expect(data).toEqual(['testing.txt']);
    });
  });
});
