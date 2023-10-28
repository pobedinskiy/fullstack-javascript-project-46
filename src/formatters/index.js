import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    case 'json':
      return json(tree);
    default:
      return `format ${formatName} is not supported`;
  }
};

export default format;
