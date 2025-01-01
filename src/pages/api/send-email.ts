import sgMail from '@sendgrid/mail';

// Configure SendGrid with API key
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { name, email, phone, company, industry, comment } = await req.json();

    const msg = {
      to: 'info@amlltd.com',
      from: import.meta.env.VITE_SENDGRID_FROM_EMAIL,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Industry: ${industry}
        Comment: ${comment}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `,
    };

    console.log('Attempting to send email with SendGrid...');
    await sgMail.send(msg);
    console.log('Email sent successfully');

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}