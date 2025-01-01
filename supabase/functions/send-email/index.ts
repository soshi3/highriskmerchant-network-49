import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const MAILJET_API_KEY = Deno.env.get('MAILJET_API_KEY')
    const MAILJET_SECRET_KEY = Deno.env.get('MAILJET_SECRET_KEY')
    const TO_EMAIL = Deno.env.get('TO_EMAIL')

    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !TO_EMAIL) {
      console.error('Missing required environment variables')
      throw new Error('Missing required environment variables')
    }

    const { name, email, message, phone, industry } = await req.json()

    if (!name || !email || !message) {
      console.error('Missing required fields')
      throw new Error('Missing required fields')
    }

    console.log('Sending email with data:', { name, email, phone, industry })

    // Create base64 encoded auth string
    const auth = btoa(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`)
    
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      },
      body: JSON.stringify({
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
      })
    })

    console.log('Mailjet API response status:', response.status)
    
    const responseText = await response.text()
    console.log('Mailjet API response body:', responseText)
    
    if (!response.ok) {
      console.error('Mailjet API error:', responseText)
      throw new Error(`Failed to send email: ${responseText}`)
    }

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