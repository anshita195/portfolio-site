import React from 'react';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';

// Define the exact shape Next.js expects
interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Use the same interface for both functions
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const project = projects.find((p) => p.slug === props.params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} - Anshita Jain's Portfolio`,
    description: project.oneLiner,
  };
}

// Make sure to use the exact same interface
export default function Page(props: PageProps) {
  const project = projects.find((p) => p.slug === props.params.slug);

  if (!project) {
    return <div>Project not found</div>; // Or render a 404 page
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700 dark:text-gray-300">
          <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Project Details</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{project.title}</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <ul className="list-disc list-inside space-y-4">
              {project.description.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
          {/* Add more project details here if needed */}
        </div>
      </div>
    </div>
  );
} 