import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://cdn.jsdelivr.net/npm/node-mailjet@6.0.2/+esm'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailRequest {
  name: string;
  email: string;
  message: string;
  phone?: string;
  industry?: string;
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const MAILJET_API_KEY = Deno.env.get('MAILJET_API_KEY')
    const MAILJET_SECRET_KEY = Deno.env.get('MAILJET_SECRET_KEY')
    const TO_EMAIL = Deno.env.get('TO_EMAIL')

    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !TO_EMAIL) {
      throw new Error('Missing required environment variables')
    }

    const { name, email, message, phone, industry } = await req.json() as EmailRequest

    if (!name || !email || !message) {
      throw new Error('Missing required fields')
    }

    const mailjet = createClient({
      apiKey: MAILJET_API_KEY,
      apiSecret: MAILJET_SECRET_KEY
    })

    const data = {
      Messages: [
        {
          From: {
            Email: TO_EMAIL,
            Name: "High Risk Merchant"
          },
          To: [
            {
              Email: TO_EMAIL,
              Name: "Admin"
            }
          ],
          Subject: `New Contact Form Submission from ${name}`,
          TextPart: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone || 'Not provided'}
            Industry: ${industry || 'Not provided'}
            Message: ${message}
          `,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Industry:</strong> ${industry || 'Not provided'}</p>
            <p><strong>Message:</strong> ${message}</p>
          `
        }
      ]
    }

    const result = await mailjet
      .post("send", { version: 'v3.1' })
      .request(data)

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})