import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ company: '', name: '', email: '', phone: '', message: '' })
      }
    } catch {
      // handle error
    }
  }

  return (
    <div className="pt-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-24 right-0 h-72 w-72 rounded-full bg-tertiary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-bold tracking-[0.22em] text-primary uppercase mb-6">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Contact <span className="gold-accent">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
                A direct line to our team for investment discussions, partnerships, and general inquiries. We respond with clarity, speed, and professionalism.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'Fast Response', value: 'Within 24 hours' },
                  { label: 'Office Hours', value: 'Sun - Fri, 9AM - 5PM' },
                  { label: 'Location', value: 'Panipokhari, Kathmandu' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <ScrollReveal>
              <div className="relative rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] p-8 md:p-10 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
                <p className="text-xs uppercase tracking-[0.24em] text-primary font-bold mb-3">Start the conversation</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Send a Message</h2>
                <p className="text-sm text-slate-600 mb-8">Tell us what you need and we will connect you with the right team member.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">✓</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message received</h3>
                    <p className="text-sm text-slate-600">Thanks for reaching out. We will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(14,165,233,0.08)]"
                        placeholder="Your company or organization"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(14,165,233,0.08)]"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(14,165,233,0.08)]"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(14,165,233,0.08)]"
                        placeholder="Phone number"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(14,165,233,0.08)] resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full rounded-2xl shadow-[0_20px_45px_rgba(14,165,233,0.18)]"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: '📍',
                title: 'Head Office',
                text: 'Panipokhari, Kathmandu, Nepal',
              },
              {
                icon: '📧',
                title: 'Email Us',
                text: 'info@skytouch.com.np',
                link: 'mailto:info@skytouch.com.np',
              },
              {
                icon: '📞',
                title: 'Call Us',
                text: '01-4XXXXXX',
                link: 'tel:+977-1-4XXXXXX',
              },
              {
                icon: '🕐',
                title: 'Office Hours',
                text: 'Sunday - Friday: 9:00 AM - 5:00 PM',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,165,233,0.10)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 text-slate-900">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-sm font-medium text-primary transition-colors group-hover:underline">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
