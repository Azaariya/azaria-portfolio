import React from 'react';
import { GraduationCap, Code2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { bio, university, degree, year } = portfolioData.personal;

  const highlights = [
    {
      icon: GraduationCap,
      title: 'ECE Background at AASTU',
      description: 'Applying system-level logic, computational thinking, and structured analysis from 4th-year Electrical & Computer Engineering coursework to modern software challenges.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Code2,
      title: 'Frontend & Modern React',
      description: 'Specializing in clean, modular React component architecture, state management, responsive UI design, and modern ES6+ JavaScript patterns.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10'
    },
    {
      icon: Cpu,
      title: 'Practical Project Delivery',
      description: 'Focusing on real-world web utilities—from financial analytics and interactive web apps to intelligent AI API integrations like StudyAI.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
            Background & Focus
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Combining Engineering Discipline with Web Development
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            An overview of my academic foundation, frontend focus, and practical approach to software.
          </p>
        </div>

        {/* Bio & Academic Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* Detailed Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed flex flex-col justify-center">
            <p>{bio}</p>
            <p>
              My coursework at <span className="text-white font-medium">{university}</span> has built a disciplined approach to technical problem-solving. Instead of just focusing on styling, I prioritize structural integrity—ensuring modular component hierarchies, predictable state flows, and clean code maintainability.
            </p>
            <p>
              I enjoy turning complex requirements into responsive, usable web applications. Through constant project work, I've developed a reliable routine in React, custom state management, local storage persistence, and consuming asynchronous REST & AI endpoints.
            </p>
          </div>

          {/* Academic Info Box */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 h-full flex flex-col justify-center">
              <h3 className="text-xs font-mono font-semibold text-slate-300 border-b border-slate-800 pb-3 uppercase tracking-wider">
                // Academic Profile
              </h3>
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block mb-0.5">INSTITUTION</span>
                  <span className="text-slate-200 text-sm font-sans font-semibold">{university}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">DEGREE PROGRAM</span>
                  <span className="text-slate-200 text-sm font-sans font-semibold">{degree}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">CURRENT LEVEL</span>
                  <span className="text-emerald-400 text-sm font-sans font-semibold">{year}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">PRIMARY DOMAIN</span>
                  <span className="text-blue-400 text-sm font-sans font-semibold">Frontend Web Apps & AI Interfaces</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-4"
              >
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};