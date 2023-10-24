import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('jsonStylishDiff', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expectedResult = readFile('filesDiff.txt');
  expect(result).toEqual(expectedResult);
});

test('ymlStylishDiff', () => {
  const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
  const expectedResult = readFile('filesDiff.txt');
  expect(result).toEqual(expectedResult);
});

test('jsonPlainDiff', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expectedResult = readFile('filesPlainDiff.txt');
  expect(result).toEqual(expectedResult);
});

test('ymlPlainDiff', () => {
  const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
  const expectedResult = readFile('filesPlainDiff.txt');
  expect(result).toEqual(expectedResult);
});
