import { describe, expect, it } from '@jest/globals';
import { parse } from '../src/parser';

describe('html', () => {
  it.only('creates a html string', () => {
    const input = 100;

    const parsed = parse(input);
    console.log('object :>> ', parsed, parsed == '<h1 id="hello-world">100</h1>');

    expect(parsed).toBe(100n);
  });
});