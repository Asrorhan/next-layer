import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Monitor,
      title: t('services.items.web.title'),
      description: t('services.items.web.desc'),
      features: [t('services.items.web.f1'), t('services.items.web.f2'), t('services.items.web.f3')],
    },
    {
      icon: ShoppingCart,
      title: t('services.items.ecom.title'),
      description: t('services.items.ecom.desc'),
      features: [t('services.items.ecom.f1'), t('services.items.ecom.f2'), t('services.items.ecom.f3')],
    },
    {
      icon: Calendar,
      title: t('services.items.booking.title'),
      description: t('services.items.booking.desc'),
      features: [t('services.items.booking.f1'), t('services.items.booking.f2'), t('services.items.booking.f3')],
    },
    {
      icon: Code2,
      title: t('services.items.custom.title'),
      description: t('services.items.custom.desc'),
      features: [t('services.items.custom.f1'), t('services.items.custom.f2'), t('services.items.custom.f3')],
    },
    {
      icon: RefreshCw,
      title: t('services.items.redesign.title'),
      description: t('services.items.redesign.desc'),
      features: [t('services.items.redesign.f1'), t('services.items.redesign.f2'), t('services.items.redesign.f3')],
    },
    {
      icon: Layers,
      title: t('services.items.support.title'),
      description: t('services.items.support.desc'),
      features: [t('services.items.support.f1'), t('services.items.support.f2'), t('services.items.support.f3')],
    },
  ];

  return (
    <div className="bg-linear-to-b from-[#F4F7FC] via-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-[#1D56C9]">
            {t('services.tag')}
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-[#0B2545] tracking-tight">
            {t('services.pageTitle')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('services.pageSubtitle')}
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
                  {t('services.requestService')}
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
              {t('services.ctaTitle')}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              {t('services.ctaDesc')}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1D56C9] hover:bg-blue-600 text-white font-medium px-6 py-3.5 rounded-lg transition-colors shrink-0"
          >
            {t('services.ctaBtn')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}