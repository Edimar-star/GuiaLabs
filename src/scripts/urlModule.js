const { openHTMLFile } = require('./fileSystemModule');
const url = require('url');

const requestListener = (req, res) => {
  const urlParse = url.parse(req.url, true);
  const path = urlParse.pathname;
  openHTMLFile(path, res);
};

module.exports = { requestListener };
