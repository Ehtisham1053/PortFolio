// Test script to verify contact form email delivery
async function testContactForm() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Portfolio Contact Form Test",
    message:
      "This is a test message to verify that the contact form is working correctly and emails are being delivered to ehtisham1053@gmail.com. If you receive this email, the contact form setup is successful!",
  }

  try {
    console.log("Sending test message...")

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    })

    const result = await response.json()

    if (response.ok) {
      console.log("✅ Test message sent successfully!")
      console.log("Response:", result)
      console.log("📧 Check your email at ehtisham1053@gmail.com")
    } else {
      console.log("❌ Failed to send test message")
      console.log("Error:", result)
    }
  } catch (error) {
    console.log("❌ Error sending test message:", error)
  }
}

// Run the test
testContactForm()
