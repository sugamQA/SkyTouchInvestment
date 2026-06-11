import { Router } from 'express'

const router = Router()

router.post('/', async (req, res) => {
  const { company, name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  try {
    // For now, log to console. Integrate nodemailer or database as needed.
    console.log('Contact form submission:', { company, name, email, phone, message })

    // TODO: Add email notification via nodemailer
    // TODO: Save to database

    res.json({ success: true, message: 'Thank you for your message. We will get back to you shortly.' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
