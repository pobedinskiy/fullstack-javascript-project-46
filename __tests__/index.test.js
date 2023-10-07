import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('jsonDiff', () => {
    const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
    const expectedResult = readFile('json_files.txt');
    expect(result).toEqual(expectedResult);
});