'use client';

import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { landingData } from '@/data/landing-data';

export const Footer: React.FC = () => {
  const { footer } = landingData;

  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-magenta bg-clip-text text-transparent mb-4">Viral</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The AI-powered platform for content creators and influencers.
            </p>
          </div>

          {/* Footer Sections */}
          {footer.sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-foreground font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cosmic-purple-light transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Viral. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {footer.social.map((social, idx) => {
              const Icon = social.icon === 'Twitter' ? Twitter : social.icon === 'Instagram' ? Instagram : Linkedin;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cosmic-purple-light transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-cosmic-purple/10"
                  aria-label={social.platform}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

