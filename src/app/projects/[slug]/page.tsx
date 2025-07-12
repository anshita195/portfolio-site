import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

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
        {/* Project Links Section */}
        {(project.githubFrontend || project.githubBackend || project.github || project.live || project.demo || project.deck) && (
          <>
            <div className="border-t border-indigo-200/20 my-8 w-full"></div>
            <div className="mt-6 flex flex-wrap gap-y-4 gap-x-4 justify-center">
              {(project.githubFrontend || project.githubBackend) ? (
                <>
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white font-semibold shadow-lux-tag border border-indigo-200/30 hover:from-indigo-500 hover:to-indigo-700 transition"
                    >
                      GitHub (Frontend)
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-lux-tag border border-blue-200/30 hover:from-blue-500 hover:to-blue-700 transition"
                    >
                      GitHub (Backend)
                    </a>
                  )}
                </>
              ) : (
                project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white font-semibold shadow-lux-tag border border-indigo-200/30 hover:from-indigo-500 hover:to-indigo-700 transition"
                  >
                    GitHub Repo
                  </a>
                )
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lux-tag border border-green-200/30 hover:from-green-500 hover:to-green-700 transition"
                >
                  Live Site
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold shadow-lux-tag border border-purple-200/30 hover:from-purple-500 hover:to-purple-700 transition"
                >
                  Demo
                </a>
              )}
              {project.deck && (
                <a
                  href={project.deck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold shadow-lux-tag border border-pink-200/30 hover:from-pink-500 hover:to-pink-700 transition"
                >
                  Presentation Deck
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
} 