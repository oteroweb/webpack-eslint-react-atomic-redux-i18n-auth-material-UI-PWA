const context = require.context("../translations", true, /\.json$/);
export default context.keys().reduce((acc, fileRelativePath) => {
  const langIso2Code = fileRelativePath.replace("./", "").replace(".json", "");
  acc[langIso2Code] = context(fileRelativePath);
  return acc;
}, {});
