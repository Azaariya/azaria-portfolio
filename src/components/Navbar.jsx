import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom Brand Icons to avoid lucide-react version mismatches
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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Featured', href: '#featured' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {portfolioData.personal.shortName}
          </span>
          <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
            .dev()
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={portfolioData.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
          >
            Let's Work Together
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base text-slate-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-md font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-3">
            <div className="flex space-x-4">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
};