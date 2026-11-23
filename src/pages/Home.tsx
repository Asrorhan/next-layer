import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  MessageSquare,
  Headphones,
  Monitor,
  ShoppingCart,
  Calendar,
  Search,
  ClipboardList,
  Code2,
  Rocket,
  LifeBuoy,
} from 'lucide-react';

const trustBadges = [
  { icon: CheckCircle2, label: 'Business-Focused Solutions' },
  { icon: Cpu, label: 'Modern & Scalable Technology' },
  { icon: MessageSquare, label: 'Clear Communication' },
  { icon: Headphones, label: 'Ongoing Support' },
];

const coreServices = [
  {
    icon: Monitor,
    title: 'Business Websites',
    description:
      'Professional, fast, and mobile-friendly websites that represent your business and attract customers.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Stores',
    description:
      'E-commerce platforms with product management, secure payments, and a smooth shopping experience.',
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    description:
      'Custom booking and ordering solutions for restaurants, services, events, and daily operations.',
  },
];

const processSteps = [
  {
    step: '1. Discovery',
    icon: Search,
    desc: 'We discuss your goals, requirements, and business ideas.',
  },
  {
    step: '2. Planning',
    icon: ClipboardList,
    desc: 'We define the scope, core features, and project timeline.',
  },
  {
    step: '3. Design & Development',
    icon: Code2,
    desc: 'We design, build, and regularly show you live progress.',
  },
  {
    step: '4. Launch',
    icon: Rocket,
    desc: 'We test everything thoroughly and launch your solution.',
  },
  {
    step: '5. Support',
    icon: LifeBuoy,
    desc: 'We provide ongoing maintenance and help when you need it.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#F4F7FC] via-white to-white pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-sm font-semibold text-[#1D56C9] tracking-wide">
                Web Development Agency
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B2545] leading-[1.15] tracking-tight">
                Custom Web Solutions for{' '}
                <span className="text-[#1D56C9]">Growing Businesses</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                We design and build modern, high-performance websites and web applications that help businesses attract customers, streamline operations, and grow online.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#163863] text-white font-medium px-6 py-3.5 rounded-lg transition-colors shadow-sm"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#0B2545] font-medium px-6 py-3.5 rounded-lg border border-slate-200 transition-colors"
                >
                  Our Work
                </Link>
              </div>
            </div>

            {/* Right Mockup Preview */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-xl">
                <div className="rounded-2xl bg-slate-900 p-3 shadow-2xl border border-slate-800">
                  {/* Browser Top Bar */}
                  <div className="flex items-center gap-1.5 pb-3 px-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-3 text-[11px] text-slate-400 bg-slate-800 px-3 py-0.5 rounded-md">
                      restaurant-saas.nextlayer.dev
                    </span>
                  </div>

                  {/* Screen Preview Card (Replace with your actual screenshot later) */}
                  <div className="rounded-xl bg-linear-to-br from-slate-900 via-[#0B2545] to-slate-900 p-6 sm:p-8 text-white border border-slate-700/60">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                        Featured SaaS Platform
                      </span>
                      <span className="text-xs text-slate-400">Live Demo</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Restaurant Ordering System
                    </h3>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      QR menu ordering, real-time Kitchen Display System (KDS), and multi-tenant admin dashboard.
                    </p>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-xs text-slate-400">QR Menu</p>
                        <p className="text-sm font-semibold mt-0.5">Instant Order</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-xs text-slate-400">Kitchen KDS</p>
                        <p className="text-sm font-semibold mt-0.5">Real-Time</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-xs text-slate-400">Admin Panel</p>
                        <p className="text-sm font-semibold mt-0.5">Full Control</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="mx-auto h-3 w-[104%] -ml-[2%] rounded-b-xl bg-slate-300 shadow-md" />
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="mt-16 pt-8 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F4F7FC] flex items-center justify-center text-[#1D56C9] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-[#0B2545] tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-slate-600">
              Web solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-[#F8FAFC] hover:bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-[#1D56C9]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D56C9] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2545] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D56C9] hover:text-[#0B2545] transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F4F7FC]/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-[#1D56C9]">
              Our Process
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#0B2545] tracking-tight">
              A Clear and Simple Process
            </h2>
            <p className="mt-3 text-slate-600">
              From your idea to a live, working solution — we keep the process transparent, efficient, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-start lg:items-center lg:text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#1D56C9]/20 shadow-sm flex items-center justify-center text-[#1D56C9] mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2545] mb-2">
                    {item.step}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}