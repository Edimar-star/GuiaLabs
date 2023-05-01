const formidable = require('formidable');
const nodemailer = require('nodemailer');
const controller = {};

controller.uploadFile = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    res.write('File uploaded');
    res.end();
  });
};

controller.sendEmail = (req, res) => {
  const { senderEmail, senderPassword, receiverEmail, subject, text } =
    req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: senderEmail, pass: senderPassword },
  });
  const mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) =>
    res.send(error ? 'Error, email not sent' : 'Email sent: ' + info.response)
  );
};

module.exports = controller;
