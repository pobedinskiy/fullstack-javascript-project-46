import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const extensions = ['yml', 'json'];

test.each(extensions)('gendiff', (ext) => {
  const fileBefore = getFixturePath(`file1.${ext}`);
  const fileAfter = getFixturePath(`file2.${ext}`);
  expect(genDiff(fileBefore, fileAfter, 'stylish')).toEqual(readFile('filesDiff.txt'));
  expect(genDiff(fileBefore, fileAfter, 'plain')).toEqual(readFile('filesPlainDiff.txt'));
  expect(genDiff(fileBefore, fileAfter, 'json')).toEqual(readFile('filesJsonDiff.txt'));
  expect(genDiff(fileBefore, fileAfter)).toEqual(readFile('filesDiff.txt'));
});
