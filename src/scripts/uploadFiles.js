const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const uploadFile = (req, res) => {
  if (req.url == '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      const oldpath = files.filetoupload.filepath;
      const newpath = __dirname + files.filetoupload.originalFilename;
      console.log(oldpath);
      console.log(newpath);
      fs.rename(oldpath, newpath, (err) => {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input required type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
};

const { PORT } = require('../config');
const server = http.createServer(uploadFile);
server.listen(PORT, () => console.log(`server is running ${PORT}`));
