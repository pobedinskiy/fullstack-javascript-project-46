import plain from './plain.js';
import stylish from './stylish.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    default:
      return `format ${formatName} is not supported`;
  }
};

export default format;
