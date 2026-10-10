import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Code, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Inline Brand Icon for GitHub
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectsGrid = () => {
  const [filter, setFilter] = useState('All');
  const { projects } = portfolioData;

  const categories = ['All', 'React', 'JavaScript'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
              Project Portfolio
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected Software Repositories
            </p>
            <p className="text-sm text-slate-400 max-w-xl">
              A collection of functional web applications built with React and vanilla JavaScript, demonstrating DOM manipulation, dynamic state, and API integration.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${filter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="space-y-4">

                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FolderGit2 size={18} className="text-blue-400" />
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {project.category}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        aria-label={`${project.title} GitHub Source`}
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights / Key Points */}
                <div className="pt-2 border-t border-slate-800/60 space-y-1.5">
                  {project.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                      <Check size={12} className="text-cyan-400 shrink-0" />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges Footer */}
              <div className="pt-4 border-t border-slate-800/80 mt-6 flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-800/50 text-[10px] font-mono text-slate-400 border border-slate-700/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};