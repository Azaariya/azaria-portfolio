import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { shortName, university } = portfolioData.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-8 text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div>
          <span>© {currentYear} </span>
          <span className="text-slate-300 font-semibold">{shortName} Ameha</span>
          <span>. Built with React & Tailwind CSS.</span>
        </div>

        <div className="text-slate-500">
          <span>{university} • ECE</span>
        </div>

      </div>
    </footer>
  );
};