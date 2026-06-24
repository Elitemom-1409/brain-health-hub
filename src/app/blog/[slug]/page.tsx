import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogData';
import { ArrowLeft, Calendar } from 'lucide-react';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-purple-900/20 bg-gradient-to-b from-purple-900/10 via-transparent to-black py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-purple-900/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-zinc-500">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            By <span className="font-semibold text-purple-300">{post.author}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="blog-content mt-10 text-base leading-relaxed text-zinc-300">
          <p className="text-lg text-purple-300/80 border-l-4 border-purple-600 pl-5 italic mb-8">
            {post.excerpt}
          </p>
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{line.replace(/\*\*/g, '')}</h2>;
            }
            if (line.startsWith('---')) {
              return <hr key={i} className="border-zinc-800 my-8" />;
            }
            if (line.trim() === '') {
              return <div key={i} className="h-4" />;
            }
            // Check for bullet points
            if (line.trim().startsWith('- ')) {
              return <li key={i} className="text-zinc-300 ml-4">{line.trim().substring(2)}</li>;
            }
            // Check for numbered lists
            if (/^\d+\.\s/.test(line.trim())) {
              return <li key={i} className="text-zinc-300 ml-4">{line.trim().replace(/^\d+\.\s/, '')}</li>;
            }
            return <p key={i} className="mb-4 leading-relaxed">{line}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-zinc-800 pt-8">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-purple-900/20 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-500/20">
              #{tag}
            </span>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300">
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
