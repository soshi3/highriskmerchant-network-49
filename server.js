import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());

// Configure Nodemailer transporter with more detailed settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  debug: true, // Enable debug logs
  logger: true, // Enable logger
  tls: {
    rejectUnauthorized: false
  }
});

// Enhanced transporter verification with detailed logging
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Configuration Error:', error);
    console.error('Email Configuration:', {
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_APP_PASSWORD ? process.env.EMAIL_APP_PASSWORD.length : 0
    });
  } else {
    console.log('Server is ready to send emails');
  }
});

app.post('/api/send-email', async (req, res) => {
  console.log('Received email request:', req.body);
  
  try {
    // Input validation
    const { name, email, phone, website, comment } = req.body;

    if (!name || !email) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({ 
        error: 'Name and email are required',
        details: { name: !name, email: !email }
      });
    }

    // Email configuration
    const mailOptions = {
      from: {
        name: 'Contact Form',
        address: process.env.EMAIL_USER
      },
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
      from: mailOptions.from,
      subject: mailOptions.subject
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    // Enhanced error response
    res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
      code: error.code,
      command: error.command
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email configuration loaded:', {
    user: process.env.EMAIL_USER,
    passPresent: !!process.env.EMAIL_APP_PASSWORD
  });
});