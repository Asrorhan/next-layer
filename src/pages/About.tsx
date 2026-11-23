import { Target, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Target,
    title: 'Business-Oriented',
    description:
      'Solutions designed to solve real operational bottlenecks, save staff time, and increase customer conversions.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Reliability',
    description:
      'Clean architecture, modern frameworks, and maintainable code built to scale smoothly as your company grows.',
  },
  {
    icon: Zap,
    title: 'Long-Term Support',
    description:
      'We stay with you after launch — providing updates, hosting guidance, and continuous improvements.',
  },
];

export default function About() {
  return (
    <div className="bg-linear-to-b from-[#F4F7FC] via-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-semibold text-[#1D56C9]">
              About Us
            </span>
            <h1 className="text-4xl sm:text-[2.75rem] font-extrabold text-[#0B2545] leading-tight tracking-tight">
              A Focused Studio with a Big Impact on Your Business
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Next Layer is a Riga-based web development studio dedicated to creating practical, high-quality websites and custom web applications for small and medium-sized businesses.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              We believe in clean design, reliable technology, and clear communication without unnecessary agency overhead. Whether you need a high-converting company website or a full restaurant ordering system, our goal is to turn your operational needs into a working digital solution.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#163863] text-white font-medium px-6 py-3.5 rounded-lg transition-colors"
              >
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B2545] p-8 sm:p-10 text-white shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#1D56C9] flex items-center justify-center font-bold text-2xl">
                N
              </div>
              <h2 className="text-2xl font-bold leading-snug">
                Built for Baltic & European Businesses
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operating out of Riga, Latvia, we build multilingual platforms (English, Latvian, Russian) tailored to local market standards and modern user expectations.
              </p>
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400 text-xs">Location</p>
                  <p className="font-semibold mt-0.5">Riga, Latvia</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Languages</p>
                  <p className="font-semibold mt-0.5">EN / LV / RU</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200/80">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center sm:text-left lg:text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D56C9] flex items-center justify-center mx-auto sm:mx-0 lg:mx-auto mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}