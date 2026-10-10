import React from 'react';
import { Sparkles, ExternalLink, CheckCircle2, Cpu, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Inline Brand Icon for GitHub
const GithubIcon = ({ size = 18, className = "" }) => (
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

export const FeaturedProject = () => {
  const project = portfolioData.featuredProject;

  return (
    <section id="featured" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <Sparkles size={13} />
              <span>{project.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title} — <span className="text-slate-400 font-normal">{project.subtitle}</span>
            </h2>
          </div>

          {/* External Links */}
          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-medium transition-colors"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Context & Problem Solved (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider flex items-center space-x-2">
                <BookOpen size={14} />
                <span>// Core Overview & Problem Solved</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
              <div className="pt-3 border-t border-slate-800">
                <p className="text-xs font-mono text-slate-400 mb-1">THE PROBLEM IT ADDRESSES:</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            </div>

            {/* Role Breakdown */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                <Cpu size={14} />
                <span>// Architecture & Implementation Scope</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.myRole}
              </p>
            </div>
          </div>

          {/* Key Features & Tech Stack (Right Column) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Tech Stack Badges */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                <Layers size={14} />
                <span>// Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700/80 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                // Module Features
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};