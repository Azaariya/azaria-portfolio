import React from 'react';
import { Milestone, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Journey = () => {
  const { journey } = portfolioData;

  return (
    <section id="journey" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
            Progression & Growth
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Development Journey
          </p>
          <p className="text-sm text-slate-400">
            From electrical engineering principles to component architecture and AI-driven interfaces.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
          {journey.map((step, idx) => (
            <div key={idx} className="relative group">

              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:border-cyan-400 group-hover:scale-110 transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
                <span className="text-[11px] font-mono font-semibold text-blue-400 tracking-wider uppercase block">
                  {step.period}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};