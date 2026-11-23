import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1D56C9] flex items-center justify-center text-white font-bold text-lg tracking-tighter">
                N
              </div>
              <span className="text-xl font-bold text-[#0B2545] tracking-tight">
                Next Layer
              </span>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Custom web solutions, booking platforms, and digital systems built for growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#0B2545] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="text-slate-600 hover:text-[#1D56C9] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-600 hover:text-[#1D56C9] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#1D56C9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#1D56C9] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-[#0B2545] uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1D56C9]" />
                <a href="mailto:hello@nextlayer.dev" className="hover:text-[#1D56C9] transition-colors">
                  hello@nextlayer.dev
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#1D56C9]" />
                <span>Riga, Latvia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Next Layer. All rights reserved.</p>
          <p>Web Development & Digital Solutions Studio</p>
        </div>
      </div>
    </footer>
  );
}