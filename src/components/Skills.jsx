import React from 'react';
import { Code2, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skills } = portfolioData;

  const categoryIcons = {
    "Frontend Core": Code2,
    "Development & Architecture": Layers,
    "Tools & Workflow": Wrench,
  };

  const categoryColors = {
    "Frontend Core": "text-blue-400 bg-blue-500/10 border-blue-500/20",
    "Development & Architecture": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    "Tools & Workflow": "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  };

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
            Technical Abilities
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills & Development Stack
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            A practical overview of the languages, frameworks, architecture concepts, and developer tools I utilize.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Code2;
            const styleClass = categoryColors[group.category] || "text-blue-400 bg-blue-500/10 border-blue-500/20";

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                    <div className={`p-2.5 rounded-lg border ${styleClass}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.items.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-200 text-xs font-medium hover:bg-slate-800 transition-colors"
                      >
                        <CheckCircle2 size={12} className="text-blue-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <p className="text-[11px] font-mono text-slate-500 border-t border-slate-800/60 pt-3">
                  Applied in real project repositories
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};