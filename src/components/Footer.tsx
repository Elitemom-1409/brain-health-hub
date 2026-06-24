import Link from 'next/link';
import { Brain, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/20 bg-black text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-white">Brain Health Hub</span>
            </div>
            <p className="text-sm leading-relaxed">
              Raising awareness about brain diseases and hydrocephalus. Empowering families with knowledge, support, and hope.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="transition-colors hover:text-purple-400">Home</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-purple-400">Blog</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-purple-400">About Me</Link></li>
              <li><Link href="/donate" className="transition-colors hover:text-purple-400">Support Our Cause</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Your support helps raise awareness and provide resources for families affected by hydrocephalus and brain diseases.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Heart className="h-4 w-4" />
              Make a Donation
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Brain Health Hub. Created with love by Anshika.</p>
          <p className="mt-1 text-zinc-600">Knowledge is the first step toward healing.</p>
        </div>
      </div>
    </footer>
  );
}
