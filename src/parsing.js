import _ from 'lodash';

export default (filepath) => {
  const filepathParts = filepath.split('/');
  const filename = _.last(filepathParts);
  const extension = _.last(filename.split('.'));
  if (extension === 'json') {
    return JSON.parse(filepath);
  }
  return null;
};
