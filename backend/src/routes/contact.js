import { Router } from 'express'

const router = Router()

const sanitize = (str) => {
  if (typeof str !== 'string') return ''
  return str.replace(/[<>]/g, '').trim().slice(0, 1000)
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res) => {
  const { company, name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  const sanitizedName = sanitize(name)
  const sanitizedEmail = sanitize(email)
  const sanitizedMessage = sanitize(message)
  const sanitizedCompany = sanitize(company || '')
  const sanitizedPhone = sanitize(phone || '')

  if (!sanitizedName || sanitizedName.length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters' })
  }

  if (!EMAIL_RE.test(sanitizedEmail)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  if (sanitizedMessage.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' })
  }

  if (Buffer.byteLength(JSON.stringify(req.body), 'utf8') > 10000) {
    return res.status(413).json({ error: 'Request too large' })
  }

  try {
    console.log('Contact form submission:', {
      company: sanitizedCompany,
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      message: sanitizedMessage,
    })

    res.json({ success: true, message: 'Thank you for your message. We will get back to you shortly.' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
