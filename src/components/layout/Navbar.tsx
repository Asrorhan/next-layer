import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1D56C9] flex items-center justify-center text-white font-bold text-lg tracking-tighter">
            N
          </div>
          <span className="text-xl font-bold text-[#0B2545] tracking-tight">
            Next Layer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#1D56C9] font-semibold'
                    : 'text-slate-600 hover:text-[#0B2545]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#0B2545] hover:bg-[#163863] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-[#0B2545]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-base font-medium ${
                  isActive ? 'text-[#1D56C9] font-semibold' : 'text-slate-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#0B2545] text-white py-2.5 rounded-lg text-sm font-medium mt-4"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}