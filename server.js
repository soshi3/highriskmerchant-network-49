import express from 'express';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure SendGrid with API key
sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, website, comment } = req.body;

    const msg = {
      to: 'amllimitedhk@gmail.com',
      from: process.env.VITE_SENDGRID_FROM_EMAIL,
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

    console.log('Attempting to send email with SendGrid...');
    await sgMail.send(msg);
    console.log('Email sent successfully');

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});