import { Heart, CreditCard, Shield, QrCode, Banknote } from 'lucide-react';
import Link from 'next/link';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-purple-900/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-black" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
            Make a Difference
          </span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Our Mission</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Your contribution helps us continue research, raise awareness, and support families navigating brain disease diagnoses. Every donation, no matter the size, brings hope and help to those who need it most.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Buy Me a Coffee */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-yellow-700/50 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-900/30 ring-1 ring-yellow-500/20">
                <Coffee className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Buy Me a Coffee</h3>
              <p className="mb-4 text-sm text-zinc-400">Support my work with a small donation. Every coffee keeps me going as I research and write.</p>
              <a href="https://www.buymeacoffee.com/anshika" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-yellow-500">
                <Heart className="h-4 w-4" /> Buy Me a Coffee
              </a>
            </div>

            {/* Razorpay / UPI */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-purple-700/50 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-900/30 ring-1 ring-purple-500/20">
                <QrCode className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">UPI / Razorpay</h3>
              <p className="mb-4 text-sm text-zinc-400">Send your donation directly via UPI or Razorpay payment gateway.</p>
              <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/50 p-4 text-center">
                <p className="text-sm text-zinc-500">UPI ID: <span className="font-mono text-purple-400">anshika@upi</span></p>
                <p className="mt-1 text-xs text-zinc-600">[QR code placeholder — upload your UPI QR code here]</p>
              </div>
              <button className="mt-4 w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90">
                Pay via Razorpay
              </button>
            </div>

            {/* PayPal */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-blue-700/50 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900/30 ring-1 ring-blue-500/20">
                <Banknote className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PayPal</h3>
              <p className="mb-4 text-sm text-zinc-400">International donors can contribute securely via PayPal.</p>
              <a href="https://paypal.me/anshikabh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500">
                <Shield className="h-4 w-4" /> Donate via PayPal
              </a>
            </div>

            {/* Stripe */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-indigo-700/50 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-900/30 ring-1 ring-indigo-500/20">
                <CreditCard className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Credit / Debit Card</h3>
              <p className="mb-4 text-sm text-zinc-400">Secure card payments processed through Stripe. All major cards accepted.</p>
              <button className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90">
                Donate with Card
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact section */}
      <section className="border-t border-purple-900/20 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">Where Your Donation Goes</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-zinc-900/50 p-4">
              <p className="text-2xl font-bold text-purple-400">50%</p>
              <p className="text-sm text-zinc-400">Medical Care & Treatment</p>
            </div>
            <div className="rounded-xl bg-zinc-900/50 p-4">
              <p className="text-2xl font-bold text-pink-400">30%</p>
              <p className="text-sm text-zinc-400">Awareness & Research</p>
            </div>
            <div className="rounded-xl bg-zinc-900/50 p-4">
              <p className="text-2xl font-bold text-blue-400">20%</p>
              <p className="text-sm text-zinc-400">Community Support Programs</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            Brain Health Hub is a personal initiative. We are committed to transparency in how every contribution is used. 
            For any questions, please <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">contact us</Link>.
          </p>
        </div>
      </section>

      {/* Thank you */}
      <section className="border-t border-purple-900/20 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <Heart className="mx-auto h-10 w-10 text-pink-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Thank You</h2>
          <p className="text-zinc-400">
            From the bottom of my heart, thank you for being part of this journey. Your support means the world 
            to us and to every family we reach together.
          </p>
          <p className="mt-4 text-sm text-purple-400">— Anshika</p>
        </div>
      </section>
    </div>
  );
}

// Need to import Coffee separately since it's a standard icon
function Coffee(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}
