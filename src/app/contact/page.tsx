import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-purple-900/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-black" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Have a question, a story to share, or just want to say hello? I would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Your Name</label>
                  <input type="text" id="name" className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500" placeholder="How can I help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Your Message</label>
                  <textarea id="message" rows={5} className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500" placeholder="Share your thoughts, story, or question..." />
                </div>
                <button type="submit" className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Other Ways to Connect</h2>
              <div className="space-y-5">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-purple-800/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-900/30 ring-1 ring-purple-500/20">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-sm text-zinc-400 mt-0.5">anshika@brainhealthhub.com</p>
                      <p className="text-xs text-zinc-600 mt-1">I try to respond within 48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-purple-800/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-900/30 ring-1 ring-blue-500/20">
                      <MessageCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">WhatsApp</h3>
                      <p className="text-sm text-zinc-400 mt-0.5">Join our community group</p>
                      <a href="#" className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block">Join WhatsApp Group →</a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-purple-800/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-900/30 ring-1 ring-pink-500/20">
                      <Send className="h-5 w-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Social Media</h3>
                      <p className="text-sm text-zinc-400 mt-0.5">Follow for updates and community</p>
                      <div className="flex gap-3 mt-2">
                        <a href="#" className="text-xs text-zinc-500 hover:text-purple-400">Instagram</a>
                        <a href="#" className="text-xs text-zinc-500 hover:text-purple-400">Twitter/X</a>
                        <a href="#" className="text-xs text-zinc-500 hover:text-purple-400">YouTube</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-purple-800/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-900/30 ring-1 ring-green-500/20">
                      <MapPin className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-sm text-zinc-400 mt-0.5">India</p>
                      <p className="text-xs text-zinc-600 mt-1">Available worldwide via email and social media</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-purple-800/30 bg-purple-900/10 p-5">
                <p className="text-sm text-purple-300">
                  <strong>Note:</strong> If you or a loved one needs immediate medical assistance, please contact your local healthcare provider or emergency services. This site provides informational resources and community support, not medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
