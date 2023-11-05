import yaml from 'js-yaml';

export default (filepath, ext) => {
  switch (ext) {
    case 'json':
      return JSON.parse(filepath);
    case 'yaml':
      return yaml.load(filepath);
    case 'yml':
      return yaml.load(filepath);
    default:
      throw new Error(`Invalid extension - ${ext}`);
  }
};
