'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Committees', id: 'committees' },
    { name: 'Leadership & OC', id: 'secretariat' },
    { name: 'Resources', id: 'resources' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(13, 17, 23, 0.97)'
          : 'rgba(13, 17, 23, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(31, 158, 92, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center gap-3"
            onClick={() => handleNavigate('home')}
          >
            <img
              src="/other_pics/logo.png"  // ← CHANGE THIS to your actual file name
              alt="TGAA MUN Logo"
              className="h-9 w-auto object-contain"
            />

            <span
              className="font-display font-bold text-lg tracking-tight"
              style={{ color: 'var(--cream)' }}
            >
              TGAA <span style={{ color: 'var(--green)' }}>MUN 2.0</span>
            </span>

            <span
              className="hidden sm:block tag-label px-2 py-0.5 rounded"
              style={{
                color: 'var(--green)',
                background: 'rgba(31, 158, 92, 0.1)',
                border: '1px solid rgba(31, 158, 92, 0.3)',
              }}
            >
              2026
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="px-4 py-2 text-sm font-medium transition-all rounded-sm relative group"
                style={{
                  color: currentPage === item.id ? 'var(--green)' : 'var(--muted)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {currentPage === item.id && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px"
                    style={{ background: 'var(--green)' }}
                  />
                )}
                <span
                  className="group-hover:text-white transition-colors"
                  style={{ color: currentPage === item.id ? 'var(--green)' : undefined }}
                >
                  {item.name}
                </span>
              </button>
            ))}

            <button
              onClick={() => handleNavigate('register')}
              className="ml-4 px-5 py-2 text-sm font-semibold clip-corner transition-all hover:opacity-90"
              style={{
                background: 'var(--green)',
                color: 'white',
                fontFamily: 'DM Mono, monospace',
                letterSpacing: '0.05em',
                fontSize: '0.75rem',
              }}
            >
              REGISTER →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded transition-colors"
            style={{ color: 'var(--cream)' }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'var(--navy)',
            borderColor: 'rgba(31, 158, 92, 0.2)',
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium rounded-sm transition-colors"
                style={{
                  color: currentPage === item.id ? 'var(--green)' : 'var(--muted)',
                  background: currentPage === item.id ? 'rgba(31, 158, 92, 0.08)' : 'transparent',
                }}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigate('register')}
              className="w-full mt-2 px-4 py-3 text-sm font-semibold clip-corner"
              style={{
                background: 'var(--green)',
                color: 'white',
                fontFamily: 'DM Mono, monospace',
                letterSpacing: '0.05em',
              }}
            >
              REGISTER NOW →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}