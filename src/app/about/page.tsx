import { Heart, GraduationCap, Baby, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-purple-900/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-black" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
            My Story
          </span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Anshika</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            A mother, a researcher, and an advocate — on a mission to raise awareness about hydrocephalus and brain health.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600">
                    <span className="text-2xl font-bold text-white">A</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Anshika</h3>
                  <p className="text-sm text-zinc-400">Mathematics (Hons.)</p>
                  <p className="text-sm text-purple-400 mt-1">Brain Health Advocate</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/blog" className="text-purple-400 hover:text-purple-300">Read Our Blog</Link></li>
                    <li><Link href="/donate" className="text-purple-400 hover:text-purple-300">Support Our Cause</Link></li>
                    <li><Link href="/contact" className="text-purple-400 hover:text-purple-300">Get In Touch</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-8 text-base leading-relaxed text-zinc-300">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                  My Background
                </h2>
                <p>
                  I am Anshika, a Mathematics (Honours) graduate with a deep passion for research and understanding 
                  the world through data and evidence. My academic training taught me how to analyze complex 
                  information critically — a skill that would later prove invaluable in an unexpected way.
                </p>
                <p className="mt-4">
                  Numbers have always made sense to me. But life, I have learned, does not always follow 
                  the neat patterns we expect. The most important equation I have ever encountered had nothing 
                  to do with mathematics — it was the equation of love, fear, hope, and resilience that came 
                  with my daughter&apos;s diagnosis.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Baby className="h-6 w-6 text-pink-400" />
                  Our Journey
                </h2>
                <p>
                  Our lives changed forever when my daughter was diagnosed with prenatal hydrocephalus. 
                  The news came during a routine ultrasound — moments of silence, then words I had never 
                  heard before, then a future I could not recognize.
                </p>
                <p className="mt-4">
                  In the days and weeks that followed, I immersed myself in research. I read medical journals, 
                  consulted specialists across the country, joined online communities of parents facing the same 
                  diagnosis, and slowly transformed my confusion into understanding. My background in mathematics 
                  gave me the discipline to analyze, organize, and apply the vast amounts of information I was 
                  absorbing.
                </p>
                <p className="mt-4">
                  But more than the research, it was the love for my daughter that drove me. Every late night 
                  spent reading about shunt technologies, every tear shed in uncertainty, every moment of fear — 
                  they were all powered by the fierce determination to give her the best possible life.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                  Why This Blog
                </h2>
                <p>
                  I started Brain Health Hub because I believe no family should face a brain disease diagnosis alone. 
                  When I was searching for information, I found plenty of medical terminology but very little that 
                  spoke to me as a mother — as someone who needed hope alongside facts.
                </p>
                <p className="mt-4">
                  This site is my attempt to bridge that gap. Every article is thoroughly researched and referenced. 
                  Every story is shared from the heart. Every resource is curated with the needs of real families in mind.
                </p>
                <p className="mt-4">
                  My goal is simple: to ensure that when another parent hears the words &ldquo;your child has 
                  hydrocephalus,&rdquo; they have a place to turn — for information, for support, and for hope.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Heart className="h-6 w-6 text-pink-400" />
                  A Call for Support
                </h2>
                <p>
                  I urge you to join this mission. Whether through sharing these articles to spread awareness, 
                  connecting with our community, or making a donation to help us continue this work — every 
                  action makes a difference.
                </p>
                <p className="mt-4">
                  My daughter&apos;s journey with hydrocephalus continues, and so does our mission. The funds 
                  raised through this platform go directly toward her medical care, ongoing research, and 
                  expanding our ability to support other families facing similar challenges.
                </p>
                <p className="mt-6 rounded-xl border border-purple-800/40 bg-purple-900/20 p-4 text-sm text-purple-300">
                  &ldquo;In the face of uncertainty, we chose knowledge. In the face of fear, we chose love. 
                  And in the face of isolation, we chose community.&rdquo;
                </p>
                <div className="mt-6">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-105"
                  >
                    <Heart className="h-4 w-4" />
                    Support Our Mission
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
