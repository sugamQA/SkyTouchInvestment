import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BlogDetailModal({ post, isOpen, onClose }) {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
                {/* Tag */}
                {post.tag && (
                  <div className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    {post.tag}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-slate-900">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-200 text-sm text-slate-600">
                  <span>Published: {post.date}</span>
                  <span>•</span>
                  <span>Reading time: {post.readingTime || '5 min'}</span>
                </div>

                {/* Description */}
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {post.description}
                </p>

                {/* Full Content */}
                <div className="prose prose-sm md:prose-base max-w-none text-slate-700 space-y-6">
                  {post.content && post.content.map((section, idx) => (
                    <div key={idx}>
                      {section.heading && (
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                          {section.heading}
                        </h2>
                      )}
                      <p className="leading-relaxed">{section.body}</p>
                      {section.points && (
                        <ul className="list-disc list-inside space-y-2 ml-2">
                          {section.points.map((point, i) => (
                            <li key={i} className="text-slate-700">{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <p className="text-slate-600 mb-4">
                    Interested in investment opportunities in this sector?
                  </p>
                  <a
                    href="/contact"
                    className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get In Touch With Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default BlogDetailModal;
