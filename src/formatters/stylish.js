import _ from 'lodash';

const spaceCount = 4;
const firstIndent = (level) => ' '.repeat(level * spaceCount - 2);
const secondIndent = (level) => ' '.repeat(spaceCount * (level - 1));

const stringifyData = (data, level) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  if (data === null) {
    return null;
  }
  const dataInLines = Object
    .entries(data)
    .map(([key, value]) => `${firstIndent(level)}  ${key}: ${stringifyData(value, level + 1)}`);
  return ['{', ...dataInLines, `${secondIndent(level)}}`].join('\n');
};

const stylish = (tree) => {
  const iter = (arr, level) => {
    const lines = arr.flatMap((node) => {
      if (node.name === 'nested') {
        return `${firstIndent(level)}  ${node.key}: ${iter(node.value, level + 1)}`;
      }
      if (node.name === 'added') {
        return `${firstIndent(level)}+ ${node.key}: ${stringifyData(node.value, level + 1)}`;
      }
      if (node.name === 'deleted') {
        return `${firstIndent(level)}- ${node.key}: ${stringifyData(node.value, level + 1)}`;
      }
      if (node.name === 'changed') {
        return `${firstIndent(level)}- ${node.key}: ${stringifyData(node.oldValue, level + 1)}\n${firstIndent(level)}+ ${node.key}: ${stringifyData(node.newValue, level + 1)}`;
      }
      return `${firstIndent(level)}  ${node.key}: ${stringifyData(node.value, level + 1)}`;
    });
    return ['{', ...lines, `${secondIndent(level)}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
