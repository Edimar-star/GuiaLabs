const fs = require('fs');

const openHTMLFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
};

const openFile = (path) => {
  fs.open(path, 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
};

const deleteFile = (path) => {
  fs.unlink(path, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
};

module.exports = { openHTMLFile, openFile, deleteFile };
