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
    console.log('Download data function called')
    
    // Sample data - replace with your actual data
    const data = {
      industries: [
        { name: "E-commerce", description: "Online retail and digital goods" },
        { name: "Gaming", description: "Online gaming and betting services" },
        // Add more industries as needed
      ],
      features: [
        { title: "Fast Approval", description: "Get approved within 24 hours" },
        { title: "Secure Processing", description: "State-of-the-art security measures" },
        // Add more features as needed
      ],
      stats: [
        { value: "99%", label: "Approval Rate" },
        { value: "24/7", label: "Support Available" },
        // Add more stats as needed
      ]
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error in download-data function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  }
})