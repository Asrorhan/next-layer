import { Link } from 'react-router-dom';
import {
  Monitor,
  ShoppingCart,
  Calendar,
  Code2,
  RefreshCw,
  Layers,
  ArrowRight,
  Check,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Business Websites',
    description:
      'Professional, fast, and mobile-friendly websites that represent your business and attract customers.',
    features: ['Custom Modern UI/UX', 'Mobile & Tablet Responsive', 'SEO & Speed Optimized'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    description:
      'Online stores with product management, secure payments, and a smooth shopping experience.',
    features: ['Product & Inventory Catalog', 'Card & Online Payments', 'Order Management Panel'],
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    description:
      'Custom booking solutions for restaurants, services, events, and daily appointment scheduling.',
    features: ['Real-Time Availability', 'Automated Confirmations', 'Staff & Schedule Control'],
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description:
      'Tailored web apps, SaaS platforms, and internal dashboards to automate your business workflows.',
    features: ['QR Ordering & Kitchen KDS', 'Role-Based Admin Panels', 'API & Database Integration'],
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description:
      'Give your existing website a modern look, better performance, and a smoother user experience.',
    features: ['UI/UX Modernization', 'Core Web Vitals Speedup', 'Mobile Experience Upgrade'],
  },
  {
    icon: Layers,
    title: 'Maintenance & Support',
    description:
      'Keep your website secure, up to date, and running smoothly with ongoing technical assistance.',
    features: ['Security & Backups', 'Content & Feature Updates', 'Priority Bug Fixes'],
  },
];

export default function Services() {
  return (
    <div className="bg-linear-to-b from-[#F4F7FC] via-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-[#1D56C9]">
            Services
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-[#0B2545] tracking-tight">
            What We Do
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We create practical, modern, and scalable web solutions for small and medium-sized businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-[#1D56C9]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D56C9] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-[#1D56C9] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D56C9] hover:text-[#0B2545] transition-colors"
                >
                  Request this service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 rounded-2xl bg-[#0B2545] p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Not sure which solution fits your business?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Tell us about your current workflow and goals — we will recommend the cleanest, most cost-effective setup.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1D56C9] hover:bg-blue-600 text-white font-medium px-6 py-3.5 rounded-lg transition-colors shrink-0"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}