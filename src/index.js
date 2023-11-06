import process from 'process';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import format from './formatters/index.js';

const getData = (filepath) => {
  const ext = path.extname(filepath).split('.')[1];
  const currentDir = process.cwd();
  const fullFilepath = path.resolve(currentDir, filepath);
  const readFile = fs.readFileSync(fullFilepath, 'utf-8');
  const parsedData = parse(readFile, ext);
  return parsedData;
};

const createTree = (obj1, obj2) => {
  const uniqKeysList = _.uniq([..._.keys(obj1), ..._.keys(obj2)]);
  const sortedKeysList = _.sortBy(uniqKeysList);
  const newTree = sortedKeysList.map((key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      const children = createTree(obj1[key], obj2[key]);
      return {
        key, value: children, name: 'nested',
      };
    }
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

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const tree = createTree(getData(filepath1), getData(filepath2));
  return format(tree, formatName);
};

export default genDiff;
