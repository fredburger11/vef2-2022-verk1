import { join } from 'path';
import { writeFile, readFile, readdir } from 'fs/promises';

import { dataTemplate, makeHTML } from './make-html.js';
import { parseIt } from './parser.js';
import parser from 'number-parsing';

const DATA_DIR = './data';
const OUPUT_DIR = './dist';



async function main() {
    const files = await readdir(DATA_DIR);
    
    //console.log('files : >>', files);

    for(const file of files) {
        const path = join(DATA_DIR, file);
        console.log('object :>> ', path);
        const info = await readFile(path);
        //console.log('data :>> ', data);
        const str = info.toString('utf-8');

        //const parsed = parseIt(str);
        //console.log('parsed :>> ', parsed);
        //console.log('str :>> ', str);

        const parsed = parseIt(str);
        //console.log('parsed :>> ', parsed);

        const html = makeHTML(parsed);

        console.log('html :>> ', html);

        const data = dataTemplate(path, html);
        const site = parser(path);
        const filename = join(OUPUT_DIR, `${site}.html`);
        
        await writeFile(filename, data);
    }

}

main().catch((err) => console.error(err));

