import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide leading-tight">
              Planet<br />
              <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Gardens</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-stone-200 hover:text-emerald-400 text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Book Now
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-stone-900/98 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 border-t border-stone-700' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map(link => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-stone-200 hover:text-emerald-400 text-base font-medium w-full text-left transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full mt-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-colors"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
