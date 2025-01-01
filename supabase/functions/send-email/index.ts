import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY");
const MAILJET_SECRET_KEY = Deno.env.get("MAILJET_SECRET_KEY");
const TO_EMAIL = Deno.env.get("TO_EMAIL");

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Check if environment variables are set
    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !TO_EMAIL) {
      console.error("Missing required environment variables");
      throw new Error("Server configuration error: Missing email service credentials");
    }

    // Parse the request body
    const { name, email, phone, message, industry, userId } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    console.log("Preparing to send email with data:", { name, email, phone, message, industry });

    // Prepare email data
    const data = {
      Messages: [
        {
          From: {
            Email: TO_EMAIL,
            Name: "High Risk Merchant Network",
          },
          To: [
            {
              Email: TO_EMAIL,
              Name: "Admin",
            },
          ],
          Subject: `New Contact Form Submission - ${industry || 'General Inquiry'}`,
          TextPart: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone || 'Not provided'}
            Industry: ${industry || 'Not specified'}
            Message: ${message}
            User ID: ${userId || 'Not logged in'}
          `,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Industry:</strong> ${industry || 'Not specified'}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>User ID:</strong> ${userId || 'Not logged in'}</p>
          `,
        },
      ],
    };

    console.log("Sending email with Mailjet...");

    // Send email using Mailjet API
    const response = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          `${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`
        )}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Mailjet API response:", result);

    if (!response.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(result)}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in send-email function:", error);
    
    return new Response(
      JSON.stringify({
        error: error.message,
        details: error.stack,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});