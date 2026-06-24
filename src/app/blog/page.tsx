import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogData';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function BlogPage() {
  const categories = [...new Set(BLOG_POSTS.map(p => p.category))];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-purple-900/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-black" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
            Knowledge & Care
          </span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Health Blog</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Deep dives into brain health, hydrocephalus, and our mission to advocate for patients everywhere.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-purple-700/50 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-purple-900/10">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-purple-900/30 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-600">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-purple-400">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-md bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition-colors group-hover:text-purple-300">
                    Read Full Story <ArrowRight className="h-3 w-3" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-purple-900/20 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white">Stay Updated</h2>
          <p className="mt-2 text-zinc-400">Join our community to receive the latest articles and updates.</p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
