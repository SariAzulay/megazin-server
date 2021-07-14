var nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shoestime20@gmail.com',
      pass: 's123s456'
    }
  });
  
  var mailOptions = {
    from: 'shoestime20@gmail.com',
    to: req.params.mail,
    subject: 'Sending  Email using Node.js',
    text:'hello'+' '+ req.params.name +' '+'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(error);
    } else {
      res.send(true)
    }
  });

}

module.exports={sendEmail}