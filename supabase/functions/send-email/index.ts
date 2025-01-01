import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get environment variables
    const MAILJET_API_KEY = Deno.env.get('MAILJET_API_KEY');
    const MAILJET_SECRET_KEY = Deno.env.get('MAILJET_SECRET_KEY');
    const TO_EMAIL = Deno.env.get('TO_EMAIL');

    // Validate environment variables
    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !TO_EMAIL) {
      console.error('Missing required environment variables:', {
        hasMailjetApiKey: !!MAILJET_API_KEY,
        hasMailjetSecretKey: !!MAILJET_SECRET_KEY,
        hasToEmail: !!TO_EMAIL
      });
      throw new Error('Server configuration error: Missing required environment variables');
    }

    // Parse request body
    const { name, email, phone, message, industry } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields:', { name, email, message });
      throw new Error('Missing required fields');
    }

    // Prepare email data
    const data = {
      Messages: [
        {
          From: {
            Email: TO_EMAIL,
            Name: "Contact Form"
          },
          To: [
            {
              Email: TO_EMAIL,
              Name: "Admin"
            }
          ],
          Subject: `New Contact Form Submission - ${industry || 'General Inquiry'}`,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${industry ? `<p><strong>Industry:</strong> ${industry}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        }
      ]
    };

    // Send email using Mailjet
    console.log('Sending email with data:', JSON.stringify(data, null, 2));
    
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`)}`
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('Mailjet API response:', JSON.stringify(result, null, 2));

    if (!response.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(result)}`);
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error) {
    console.error('Error in send-email function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});