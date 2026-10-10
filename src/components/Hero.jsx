import React from 'react';
import { ArrowRight, Terminal, Sparkles, FileCode2, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Inline Brand Icons to maintain icon reliability across environments
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

const LinkedinIcon = ({ size = 18, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero = () => {
  const { name, headline, university, year, githubUrl, linkedinUrl, email } = portfolioData.personal;

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Academic Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{year} • ECE at AASTU</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug">
                {headline}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Studying Electrical and Computer Engineering at {university}. I specialize in building responsive, component-driven web applications with React, JavaScript, and integrating intelligent AI API services through hands-on project development.
            </p>

            {/* CTA Button Group */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#featured"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20"
              >
                <span>View Featured Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium text-sm transition-colors"
              >
                <GithubIcon size={18} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${email}`}
                className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Email Direct"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Quick Core Focus Tags */}
            <div className="pt-4 flex items-center space-x-6 text-xs font-mono text-slate-500 border-t border-slate-800/80">
              <div className="flex items-center space-x-1.5">
                <FileCode2 size={14} className="text-blue-400" />
                <span>React & JavaScript</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Sparkles size={14} className="text-cyan-400" />
                <span>AI API Integrations</span>
              </div>
            </div>
          </div>

          {/* Interactive Code Preview Window (Right Column) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">

              {/* Window Controls Bar */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center space-x-1 text-slate-500">
                  <Terminal size={13} />
                  <span>developer.config.js</span>
                </div>
              </div>

              {/* Mock Terminal Content */}
              <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{name}"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">institution:</span> <span className="text-emerald-300">"AASTU"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">"Electrical & Computer Eng."</span>,</p>
                <p className="pl-4"><span className="text-slate-400">focus:</span> [<span className="text-cyan-300">"Frontend"</span>, <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"AI APIs"</span>],</p>
                <p className="pl-4"><span className="text-slate-400">approach:</span> <span className="text-emerald-300">"Hands-on building & iteration"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">featuredApp:</span> <span className="text-amber-300">"Movie Booking App"</span></p>
                <p>&#125;;</p>
                <p className="pt-2 text-slate-500">// Ready for junior roles, internships & freelance</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};