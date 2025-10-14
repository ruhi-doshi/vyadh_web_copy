const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

// MongoDB Connection, include your mongodb url
mongoose.connect('mongodb+srv://mantissa6789:Mantis%402510@cluster0.9ramotn.mongodb.net/', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: 'vyaadh-forms'
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define MongoDB Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  companyName: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// const transporter = nodemailer.createTransport({
// service: 'gmail',
// auth: {
// user: 'vyadh2510ver@gmail.com',
// pass: 'Mantis@2510' // Use an app password if 2FA is enabled
// }
// });

// const transporter = nodemailer.createTransport({
// host: "smtp.ethereal.email",
// port: 587,
// secure: false, // true for port 465, false for other ports
// auth: {
// user: "maddison53@ethereal.email",
// pass: "jn7jnAPss4f63QBp6D",
// },
// });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use SSL
  auth: {
    user: 'teamvyadh@vit.ac.in',
    pass: 'qtfz ygts tsyj uxup',
  }
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, companyName, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      companyName,
      message,
    });

    await newContact.save();

    console.log('Contact saved:', newContact); 
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

// New route for sending email
app.post('/api/send-email', async (req, res) => {
  const { name, email, companyName, message } = req.body;

  const mailData = {
    from: 'teamvyadh@vit.ac.in',
    to: 'teamvyadh@vit.ac.in',
    subject: 'New Contact Form Submission',
    text: `New contact submission from ${name} (${email})\n\nMessage:\n${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company Name:</strong> ${companyName}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
    `
  };

  try {
    await transporter.sendMail(mailData);
    res.status(201).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ message: 'Error sending mail' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



