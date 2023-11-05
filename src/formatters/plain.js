import _ from 'lodash';

const transform = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (data === null) {
    return null;
  }
  if ((_.isBoolean(data)) || (data === 0)) {
    return `${data}`;
  }
  return `'${data}'`;
};

const plain = (tree) => {
  const iter = (arr, acc) => {
    const lines = arr
      .filter((node) => node.name !== 'unchanged')
      .map((node) => {
        const keyPath = acc === '' ? `${node.key}` : `${acc}.${node.key}`;
        switch (node.name) {
          case 'nested':
            return iter(node.value, keyPath);
          case 'added':
            return `Property '${keyPath}' was added with value: ${transform(node.value)}`;
          case 'deleted':
            return `Property '${keyPath}' was removed`;
          case 'changed':
            return `Property '${keyPath}' was updated. From ${transform(node.oldValue)} to ${transform(node.newValue)}`;
          default:
            return null;
        }
      });
    return [...lines].join('\n');
  };
  return iter(tree, '');
};

export default plain;
