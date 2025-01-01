import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:8080',
    /\.lovableproject\.com$/,
    /localhost$/
  ],
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Email Configuration Error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

app.post('/api/send-email', async (req, res) => {
  console.log('Received email request:', req.body);
  
  try {
    const { name, email, phone, website, comment } = req.body;

    if (!name || !email) {
      console.error('Validation Error: Missing required fields');
      return res.status(400).json({ 
        error: 'Name and email are required',
        details: 'Required fields are missing from the request'
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Configuration Error: Missing email credentials');
      return res.status(500).json({ 
        error: 'Email configuration error',
        details: 'Server email credentials are not properly configured'
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Comment:</strong> ${comment || 'No comment'}</p>
      `
    };

    console.log('Attempting to send email with options:', {
      to: mailOptions.to,
      subject: mailOptions.subject,
      from: mailOptions.from
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Email sending failed:', {
      error: error.message,
      stack: error.stack,
      code: error.code
    });
    
    res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
      code: error.code
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});