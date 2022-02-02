import { describe, expect, it } from '@jest/globals';
import { parse } from '../src/parser';

describe('parser', () => {
  it.only('parses number file', () => {
    const input = 100;

    const parsed = parse(input);
    console.log('object :>> ', parsed, parsed == '<h1 id="hello-world">100</h1>');

    expect(parsed).toBe(100n);
  });

  it('parses number file 2', () => {
    const input = 50;

    const parsed = parse(input);

    expect(parsed).toBe('<h1 id="hello-world">50</h1>');
  });
});