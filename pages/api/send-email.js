import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name } = req.body

  if (!name) {
    return res.status(400).json({ error: 'Name is required' })
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'currentfestival.submissions@gmail.com',
      subject: 'New Form Submission',
      html: `<p>Name entered: ${name}</p>`,
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ success: false, error: error.message })
  }
}