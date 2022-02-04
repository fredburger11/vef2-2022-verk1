import { readdir } from 'fs/promises';

export function readFiles(input) {
    const files = readdir(input);
    return files;
}
