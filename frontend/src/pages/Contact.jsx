import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { CheckCircle, MapPin, Mail, Phone, Clock } from 'lucide-react'

const contactBgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fit=crop&auto=format"

export default function Contact() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const el = document.getElementById('contact-form')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location.hash])

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
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={contactBgImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.04]"
          loading="lazy"
        />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-24 right-0 h-72 w-72 rounded-full bg-tertiary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <section className="relative py-24 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
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
              <div id="contact-form" className="relative rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] p-8 md:p-10 overflow-hidden">
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
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><CheckCircle size={28} /></div>
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
                icon: MapPin,
                title: 'Head Office',
                text: 'Panipokhari, Kathmandu, Nepal',
              },
              {
                icon: Mail,
                title: 'Email Us',
                text: 'info@skytouch.com.np',
                link: 'mailto:info@skytouch.com.np',
              },
              {
                icon: Phone,
                title: 'Call Us',
                text: '01-4XXXXXX',
                link: 'tel:+977-1-4XXXXXX',
              },
              {
                icon: Clock,
                title: 'Office Hours',
                text: 'Sunday - Friday: 9:00 AM - 5:00 PM',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,165,233,0.10)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon size={22} />
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

      {/* Map Section */}
      <section className="relative pb-24">
        {/* Decorative blobs behind the map */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-tertiary/5 blur-3xl" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-bold tracking-[0.22em] text-primary uppercase">
              Find Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-6 mb-4">
              Our <span className="gold-accent">Location</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
              Visit our headquarters in the heart of Kathmandu. We look forward to meeting you.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_32px_100px_rgba(15,23,42,0.12)] group">
              {/* Top gradient accent bar */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-tertiary z-10" />

              <div className="relative h-[300px] md:h-[520px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1484525333263!2d85.3187066!3d27.7168959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19084a5c1b2b%3A0x3e8a5b5c5b5c5b5c!2sPanipokhari%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SkyTouch Office Location"
                  className="w-full h-full"
                />

                {/* Floating info card over the map */}
                <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-72 z-10 rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl p-5 shadow-[0_16px_50px_rgba(15,23,42,0.18)]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Sky Touch Investment</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        Panipokhari, Kathmandu<br />
                        Nepal
                      </p>
                      <div className="mt-3 flex gap-3">
                        <a
                          href="https://maps.google.com/?q=Panipokhari+Kathmandu+Nepal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          Open in Google Maps →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
