import process from 'process';
import fs from 'fs';
import path from 'path';
import parse from './parsing';

const getData = (filepath) => {
  const currentDir = process.cwd();
  const fullFilepath = path.resolve(currentDir, filepath);
  const readFile = fs.readFileSync(fullFilepath, 'utf8');
  const parsedData = parse(readFile);
  return parsedData;
};
