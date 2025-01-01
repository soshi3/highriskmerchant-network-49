import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate environment variables
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      throw new Error("Server configuration error: Missing email service credentials");
    }

    // Parse request body
    const { name, email, phone, message, industry } = await req.json();
    console.log("Received email request:", { name, email, phone, message, industry });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      throw new Error("Missing required fields");
    }

    // Prepare email data
    const emailData = {
      from: "AML Limited <info@amlltd.com>",
      to: ["info@amlltd.com"],
      subject: `New Contact Form Submission - ${industry || 'General Inquiry'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${industry || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log("Sending email with Resend data:", JSON.stringify(emailData, null, 2));

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    const result = await response.json();
    console.log("Resend API response:", JSON.stringify(result, null, 2));

    if (!response.ok) {
      console.error("Resend API error details:", {
        status: response.status,
        statusText: response.statusText,
        result: result
      });
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