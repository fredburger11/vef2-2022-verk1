import { join } from 'path';
import { writeFile, readFile, readdir } from 'fs/promises';

import { dataTemplate, makeHTML, makeIndex } from './make-html.js';
import { findMax, findMean, findMedian, findMin, findRange, findstdev, findSum, findVariance, parseIt, strToNumArr } from './parser.js';
import parser from 'number-parsing';

const DATA_DIR = './data';
const OUPUT_DIR = './dist';



async function main() {
    const files = await readdir(DATA_DIR);
    
    const infos = [];
    const nr = [];

    for(const file of files) {
        const path = join(DATA_DIR, file);
        const info = await readFile(path);
        //Strengur af öllu gagnasetti
        const str = info.toString('utf-8');

        //Fylki af löglegu gagnasetti í str formi
        const parsed = parseIt(str);
        
        //Fylki af löglegu gagnasetti í num formi
        const numParsed = strToNumArr(parsed);

        var vari = findVariance(numParsed);
        var max = findMax(numParsed);
        var mean = findMean(numParsed);
        var median = findMedian(numParsed);
        var min = findMin(numParsed);
        var stdev = findstdev(numParsed);
        var sum = findSum(numParsed);
        var range = findRange(numParsed);
        
        const html = makeHTML(str, vari, max, mean, median, min, stdev, sum, range);
        const data = dataTemplate(path, html);
        const site = parser(path);
        const filename = join(OUPUT_DIR, `${site}.html`);
        
        await writeFile(filename, data);

        infos.push(path);
    }

    const index = dataTemplate('Gagnavinnsla', makeIndex(infos));
    await writeFile(join(OUPUT_DIR, 'index.html'), index, { flag: 'w+'});

}

main().catch((err) => console.error(err));

