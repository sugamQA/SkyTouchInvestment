import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const sections = [
  {
    title: 'Terms of Use',
    content: 'By accessing this website, you agree to these terms and conditions. If you do not agree, please do not use this site. The content on this website is for general information purposes only and is subject to change without notice.',
  },
  {
    title: 'Privacy Policy',
    content: 'We are committed to protecting your privacy. Any information collected through this website will be used solely for the purpose of providing our services and will not be shared with third parties without your consent, except as required by law.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content, trademarks, and intellectual property on this website are owned by Sky Touch Investment & Consultant Pvt. Ltd. Unauthorized use, reproduction, or distribution of any material is strictly prohibited.',
  },
  {
    title: 'Investment Disclaimer',
    content: 'The information provided on this website does not constitute investment advice, solicitation, or offer to buy or sell any securities. Past performance does not guarantee future results. All investments carry risk, and you should consult with a qualified financial advisor before making investment decisions.',
  },
  {
    title: 'Limitation of Liability',
    content: 'Sky Touch Investment & Consultant Pvt. Ltd. shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.',
  },
  {
    title: 'Governing Law',
    content: 'These terms and conditions are governed by and construed in accordance with the laws of Nepal. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the site after changes constitutes acceptance of the new terms.',
  },
]

export default function Terms() {
  return (
    <div className="pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Terms & <span className="gold-accent">Conditions</span>
            </h1>
            <p className="text-lg text-on-surface-variant/70 max-w-2xl mx-auto">
              Please read these terms carefully before using our website or services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.05}>
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-primary">{section.title}</h2>
                <p className="text-sm text-on-surface-variant/70 leading-relaxed">{section.content}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <p className="text-sm text-outline">
            Last updated: January 2026. For questions about these terms, please{' '}
            <a href="/contact" className="text-primary hover:underline">contact us</a>.
          </p>
        </ScrollReveal>
      </section>
    </div>
  )
}
