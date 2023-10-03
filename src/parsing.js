export default (filepath, ext) => {
  if (ext === 'json') {
    return JSON.parse(filepath);
  }
  return null;
};
