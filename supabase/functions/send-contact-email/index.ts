
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Edge function called with method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if RESEND_API_KEY is available first
    const apiKey = Deno.env.get("RESEND_API_KEY");
    console.log("API key check:", apiKey ? "Found" : "Missing");
    
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      throw new Error("Email service is not configured properly. Please contact the administrator.");
    }

    // Initialize Resend with the API key
    const resend = new Resend(apiKey);
    
    console.log("Processing request...");
    const requestText = await req.text();
    console.log("Raw request body:", requestText);
    
    const { name, email, message }: ContactEmailRequest = JSON.parse(requestText);
    console.log("Parsed data:", { name, email, messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    console.log("Sending contact email for:", { name, email });

    // Send email to your verified email address (akintadeseun816@gmail.com)
    // This will work in testing mode until you verify a domain
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["akintadeseun816@gmail.com"], // Using your verified email temporarily
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><em>This message was sent from your portfolio contact form.</em></p>
        <p><em>Reply to: ${email}</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
