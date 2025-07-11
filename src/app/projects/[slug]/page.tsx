import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18122B] via-[#393053] to-[#635985] px-4 py-12 font-sans">
      <div className="w-full max-w-2xl rounded-3xl shadow-2xl border border-white/20 p-10 animate-lux-fade-in bg-[rgba(30,27,52,0.92)] lux-card">
        <Link href="/" className="inline-block mb-8 px-4 py-2 border border-indigo-300/40 rounded-full text-indigo-200 hover:text-white hover:border-white transition font-semibold text-sm bg-white/5 hover:bg-indigo-400/10">
          ← Back to Home
        </Link>
        <h1 className="text-5xl sm:text-6xl font-serif font-extrabold mb-4 tracking-tight text-white">
          {project.title}
        </h1>
        <div className="text-base sm:text-lg text-white mb-8 font-medium flex flex-wrap items-center gap-3">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-indigo-200/30 text-white font-semibold shadow-lux-tag">
            {project.organization}
          </span>
          <span className="text-indigo-200">•</span>
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-400/20 border border-indigo-200/30 text-white font-semibold shadow-lux-tag">
            {project.date}
          </span>
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-white/10 border border-indigo-200/20 px-4 py-1 text-xs font-semibold text-white shadow-lux-tag"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="prose dark:prose-invert prose-lg max-w-none text-white">
          <ul className="list-disc pl-6 space-y-6">
            {project.details.map((detail, i) => (
              <li key={i} className="leading-relaxed text-lg font-light">{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 