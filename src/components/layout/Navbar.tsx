import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'lv', label: 'LV' },
  { code: 'ru', label: 'RU' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('nextlayer_lang', code);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b border-slate-100">
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

        {/* Desktop Language Switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-slate-100 rounded-lg p-1 text-xs font-semibold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  i18n.language === lang.code
                    ? 'bg-white text-[#0B2545] shadow-2xs'
                    : 'text-slate-500 hover:text-[#0B2545]'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="bg-[#0B2545] hover:bg-[#163863] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            {t('nav.quote')}
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

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2 pt-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold border ${
                  i18n.language === lang.code
                    ? 'bg-[#0B2545] text-white border-[#0B2545]'
                    : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#0B2545] text-white py-2.5 rounded-lg text-sm font-medium mt-4"
          >
            {t('nav.quote')}
          </Link>
        </div>
      )}
    </header>
  );
}