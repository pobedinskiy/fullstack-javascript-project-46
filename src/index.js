import process from 'process';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parsing.js';

const getData = (filepath) => {
  const ext = path.extname(filepath).split('.')[1];
  const currentDir = process.cwd();
  const fullFilepath = path.resolve(currentDir, filepath);
  const readFile = fs.readFileSync(fullFilepath, 'utf-8');
  const parsedData = parse(readFile, ext);
  return parsedData;
};

const createTree = (filepath1, filepath2) => {
  const obj1 = getData(filepath1);
  const obj2 = getData(filepath2);
  const keysOfObj1 = _.keys(obj1);
  const keysOfObj2 = _.keys(obj2);
  const uniqKeysList = _.uniq([...keysOfObj1, ...keysOfObj2]);
  const sortedKeysList = uniqKeysList.sort();
  const newTree = sortedKeysList.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        key, value: obj2[key], name: 'added',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        key, value: obj1[key], name: 'deleted',
      };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key, oldValue: obj1[key], newValue: obj2[key], name: 'changed',
      };
    }
    return { key, value: obj1[key], name: 'unchanged' };
  });
  return newTree;
};

const genDiff = (filepath1, filepath2) => {
  const tree = createTree(filepath1, filepath2);
  const nodes = tree.map((node) => {
    switch (node.name) {
      case 'added':
        return `  + ${node.key}: ${node.value}`;
      case 'deleted':
        return `  - ${node.key}: ${node.value}`;
      case 'changed':
        return `  - ${node.key}: ${node.oldValue}\n  + ${node.key}: ${node.newValue}`;
      default:
        return `    ${node.key}: ${node.value}`;
    }
  });
  const resultTree = `{\n${nodes.join('\n')}\n}`;
  return resultTree;
};

export default genDiff;
