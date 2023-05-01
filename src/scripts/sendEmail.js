const nodemailer = require('nodemailer');
const http = require('http');
const querystring = require('querystring');

const sendEmail = (req, res) => {
  if (req.url == '/sendEmail' && req.method.toLowerCase() == 'post') {
    let allData = '';
    req.addListener('data', (chunk) => {
      allData += chunk;
      console.log(chunk);
    });
    //  Se reciben todos los fragmentos de formulario
    req.addListener('end', () => {
      const dataString = allData.toString();
      console.log(dataString);
      const data = querystring.parse(dataString);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: data.emailS,
          pass: data.password,
        },
      });

      const mailOptions = {
        from: data.emailS,
        to: data.emailR,
        subject: data.subject,
        text: data.textarea,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="sendEmail" method="post">');
    res.write(
      '<input type="email" name="emailS" placeholder="Sender email" pattern=".+@gmail.com" required>'
    );
    res.write(
      '<input type="password" name="password" placeholder="Your password" required>'
    );
    res.write(
      '<input type="email" name="emailR" placeholder="Recipient email" pattern=".+@gmail.com" required>'
    );
    res.write(
      '<input type="text" name="subject" placeholder="Subject" required>'
    );
    res.write(
      '<textarea name="textarea" rows="10" cols="50" placeholder="Write something here"></textarea>'
    );
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
};

const { PORT } = require('../config');
const server = http.createServer(sendEmail);
server.listen(PORT, () => console.log(`server is running ${PORT}`));
