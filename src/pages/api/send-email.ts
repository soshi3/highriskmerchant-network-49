import sgMail from '@sendgrid/mail';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, subject, name, email, phone, website, comment } = req.body;

  // Configure SendGrid with API key from environment
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('SendGrid configuration missing');
    return res.status(500).json({ message: 'Email service not configured' });
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to,
    from: fromEmail,
    subject,
    text: `
      New contact form submission:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Website: ${website || 'Not provided'}
      Comment: ${comment || 'No comment provided'}
    `,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Website:</strong> ${website || 'Not provided'}</p>
      <p><strong>Comment:</strong> ${comment || 'No comment provided'}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}