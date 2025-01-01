import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Configure CORS to accept all origins in development
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// Configure Nodemailer transporter with more secure settings
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
  },
  debug: true, // Enable debug logs
  logger: true  // Enable logger
});

// Verify transporter configuration on startup
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transporter verification failed:', error);
    console.error('Email configuration:', {
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_APP_PASSWORD ? process.env.EMAIL_APP_PASSWORD.length : 0
    });
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, website, comment } = req.body;
    
    console.log('Request body:', req.body);

    if (!name || !email) {
      console.log('Validation failed: Missing name or email');
      return res.status(400).json({ error: 'Name and email are required' });
    }

    console.log('Received email request:', { name, email, phone, website });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'amllimitedhk@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Website: ${website}
        Comment: ${comment}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `,
    };

    console.log('Attempting to send email with options:', mailOptions);
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

    res.status(200).json({ 
      message: 'Email sent successfully', 
      info: {
        messageId: info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
      } 
    });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    console.error('Stack trace:', error.stack);
    console.error('Error code:', error.code);
    console.error('Error command:', error.command);
    
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message,
      code: error.code,
      command: error.command,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Email configuration:', {
    user: process.env.EMAIL_USER,
    passLength: process.env.EMAIL_APP_PASSWORD ? process.env.EMAIL_APP_PASSWORD.length : 0
  });
});