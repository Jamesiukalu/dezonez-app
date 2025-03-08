// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

app.post('/submit-form', (req, res) => {
  const { firstName, lastName, email, phoneNumber, service, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'New Quote Request',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Service: ${service}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



frontend
const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    firstName: formData.get('first-name'),
    lastName: formData.get('last-name'),
    email: formData.get('email'),
    phoneNumber: formData.get('phone-number'),
    service: formData.get('service'),
    message: formData.get('message'),
  };
  try {
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit form.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
  }
};