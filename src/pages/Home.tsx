import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

export default function Home() {
  const { t } = useTranslation();

  const trustBadges = [
    { icon: CheckCircle2, label: t('trust.t1') },
    { icon: Cpu, label: t('trust.t2') },
    { icon: MessageSquare, label: t('trust.t3') },
    { icon: Headphones, label: t('trust.t4') },
  ];

  const coreServices = [
    {
      icon: Monitor,
      title: t('services.items.web.title'),
      description: t('services.items.web.desc'),
    },
    {
      icon: ShoppingCart,
      title: t('services.items.ecom.title'),
      description: t('services.items.ecom.desc'),
    },
    {
      icon: Calendar,
      title: t('services.items.booking.title'),
      description: t('services.items.booking.desc'),
    },
  ];

  const processSteps = [
    { step: t('process.s1Title'), icon: Search, desc: t('process.s1Desc') },
    { step: t('process.s2Title'), icon: ClipboardList, desc: t('process.s2Desc') },
    { step: t('process.s3Title'), icon: Code2, desc: t('process.s3Desc') },
    { step: t('process.s4Title'), icon: Rocket, desc: t('process.s4Desc') },
    { step: t('process.s5Title'), icon: LifeBuoy, desc: t('process.s5Desc') },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#F4F7FC] via-white to-white pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-sm font-semibold text-[#1D56C9] tracking-wide">
                {t('hero.badge')}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B2545] leading-[1.15] tracking-tight">
                {t('hero.title1')}{' '}
                <span className="text-[#1D56C9]">{t('hero.title2')}</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#163863] text-white font-medium px-6 py-3.5 rounded-lg transition-colors shadow-sm"
                >
                  {t('hero.ctaPrimary')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#0B2545] font-medium px-6 py-3.5 rounded-lg border border-slate-200 transition-colors"
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </div>

            {/* Right Mockup Preview */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-xl">
                <div className="rounded-2xl bg-slate-900 p-3 shadow-2xl border border-slate-800">
                  <div className="flex items-center gap-1.5 pb-3 px-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-3 text-[11px] text-slate-400 bg-slate-800 px-3 py-0.5 rounded-md">
                      restaurant-saas.nextlayer.dev
                    </span>
                  </div>

                  <div className="rounded-xl bg-linear-to-br from-slate-900 via-[#0B2545] to-slate-900 p-6 sm:p-8 text-white border border-slate-700/60">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                        {t('hero.featuredBadge')}
                      </span>
                      <span className="text-xs text-slate-400">{t('hero.liveDemo')}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {t('hero.mockupTitle')}
                    </h3>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      {t('hero.mockupDesc')}
                    </p>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-xs text-slate-400">{t('hero.feat1Label')}</p>
                        <p className="text-sm font-semibold mt-0.5">{t('hero.feat1Val')}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-xs text-slate-400">{t('hero.feat2Label')}</p>
                        <p className="text-sm font-semibold mt-0.5">{t('hero.feat2Val')}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-xs text-slate-400">{t('hero.feat3Label')}</p>
                        <p className="text-sm font-semibold mt-0.5">{t('hero.feat3Val')}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
              {t('services.homeTitle')}
            </h2>
            <p className="mt-3 text-slate-600">
              {t('services.homeSubtitle')}
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
                    {t('services.learnMore')}
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
              {t('process.tag')}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#0B2545] tracking-tight">
              {t('process.title')}
            </h2>
            <p className="mt-3 text-slate-600">
              {t('process.subtitle')}
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