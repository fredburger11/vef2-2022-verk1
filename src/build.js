import { join } from 'path';
import { writeFile, readFile } from 'fs/promises';

import parser from 'number-parsing';

import { dataTemplate, makeHTML, makeIndex } from './make-html.js';
import { parseIt, strToNumArr } from './parser.js';
import {
  findMax,
  findMean,
  findMedian,
  findMin,
  findRange,
  findstdev,
  findSum,
  findVariance,
} from './calc.js';
import { readFiles } from './readfile.js';

const DATA_DIR = './data';
const OUPUT_DIR = './dist';

async function main() {
  const files = await readFiles(DATA_DIR);

  const infos = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);
    const info = await readFile(path);

    // Strengur af öllu gagnasetti
    const str = info.toString('utf-8');

    // Fylki af "löglegu" gagnasetti í str formi
    const parsed = parseIt(str);

    // Fylki af "löglegu" gagnasetti í num formi
    var numParsed = strToNumArr(parsed);

    const vari = findVariance(numParsed);
    const max = findMax(numParsed);
    const mean = findMean(numParsed);
    const median = findMedian(numParsed);
    const min = findMin(numParsed);
    const stdev = findstdev(numParsed);
    const sum = findSum(numParsed);
    const range = findRange(numParsed);

    const html = makeHTML(str, vari, max, mean, median, min, stdev, sum, range);
    const data = dataTemplate(path, html);
    const site = parser(path);
    const filename = join(OUPUT_DIR, `${site}.html`);

    await writeFile(filename, data);

    infos.push(path);
  }

  const index = dataTemplate('Gagnavinnsla', makeIndex(infos));
  await writeFile(join(OUPUT_DIR, 'index.html'), index, { flag: 'w+' });
}

main().catch((err) => console.error(err));
