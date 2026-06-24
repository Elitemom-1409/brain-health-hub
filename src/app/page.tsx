'use client';

import Link from 'next/link';
import BrainScene from '@/components/BrainScene';
import { BLOG_POSTS } from '@/lib/blogData';
import { Heart, ArrowRight, BookOpen, Users, Globe, Brain } from 'lucide-react';

export default function Home() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <BrainScene className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300 backdrop-blur-sm">
            Awareness. Support. Hope.
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
            Understanding
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Brain Health
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            A mother&apos;s journey through prenatal hydrocephalus — sharing research, 
            raising awareness, and building a community for families affected by brain diseases.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-600/40"
            >
              <BookOpen className="h-4 w-4" />
              Read Our Blog
            </Link>
            <Link
              href="/donate"
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition-all duration-300 hover:border-purple-500 hover:text-purple-300"
            >
              <Heart className="h-4 w-4" />
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative border-t border-purple-900/20 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 ring-1 ring-purple-500/20">
                <Brain className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Research & Knowledge</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Deeply researched articles on brain diseases, treatments, and breakthroughs — all verified and referenced.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-600/20 to-purple-600/20 ring-1 ring-pink-500/20">
                <Users className="h-7 w-7 text-pink-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Community Support</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                A safe space for families to connect, share experiences, and find strength together.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 ring-1 ring-blue-500/20">
                <Globe className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">Global Awareness</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Spreading awareness across borders to ensure no family faces hydrocephalus alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="border-t border-purple-900/20 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Latest From Our Blog</h2>
            <p className="mt-3 text-zinc-400">Insights, research, and personal stories on brain health</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-purple-700/50 hover:bg-zinc-900 hover:shadow-xl hover:shadow-purple-900/10">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-purple-900/30 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-600">{post.date}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-purple-400">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition-colors group-hover:text-purple-300">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-purple-500 hover:text-purple-300"
            >
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-purple-900/20 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 sm:p-12 ring-1 ring-purple-500/10">
            <Heart className="mx-auto mb-4 h-10 w-10 text-pink-400" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Support Our Mission</h2>
            <p className="mt-3 text-zinc-400">
              Your contribution helps us continue our research, create awareness, and support 
              families navigating brain disease diagnoses. Every bit of support matters.
            </p>
            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-105"
            >
              <Heart className="h-4 w-4" />
              Make a Difference
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
