'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-navy/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-magenta bg-clip-text text-transparent hover:from-cosmic-purple-light hover:to-cosmic-magenta transition-all">
            Viral
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#discover" className="text-gray-300 hover:text-cosmic-purple transition-colors font-medium">
              Discover
            </a>
            <a href="#features" className="text-gray-300 hover:text-cosmic-purple transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cosmic-purple transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-300 hover:text-cosmic-purple transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" variant="outline">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-dark-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#discover"
                className="text-gray-300 hover:text-cosmic-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discover
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-cosmic-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-cosmic-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-cosmic-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button size="md" variant="outline" className="mt-2">
                Sign Up
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

