import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("📧 Contact form API called")

    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.log("❌ Failed to parse request body:", parseError)
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { name, email, subject, message } = body
    console.log("📝 Form data received:", { name, email, subject })

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log("❌ Missing required fields")
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.log("❌ RESEND_API_KEY not found")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    console.log("📤 Attempting to send email...")

    // Try to import and use Resend
    try {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Send email using Resend
      const emailResult = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "ehtisham1053@gmail.com",
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 4px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This message was sent from your portfolio website contact form.</p>
              <p>You can reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        `,
      })

      console.log("✅ Email sent successfully:", emailResult)
      return NextResponse.json({ message: "Message sent successfully", id: emailResult.data?.id }, { status: 200 })
    } catch (resendError) {
      console.error("❌ Resend error:", resendError)

      // Fallback: Just log the message (for testing)
      console.log("📝 Fallback: Logging message instead of sending email")
      console.log("Contact form submission:", { name, email, subject, message })

      return NextResponse.json(
        {
          message: "Message received (email service temporarily unavailable)",
          fallback: true,
        },
        { status: 200 },
      )
    }
  } catch (error) {
    console.error("❌ Unexpected error:", error)

    // Ensure we always return JSON
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
