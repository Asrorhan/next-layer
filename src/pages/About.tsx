import { Target, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t('about.v1Title'), description: t('about.v1Desc') },
    { icon: ShieldCheck, title: t('about.v2Title'), description: t('about.v2Desc') },
    { icon: Zap, title: t('about.v3Title'), description: t('about.v3Desc') },
  ];

  return (
    <div className="bg-linear-to-b from-[#F4F7FC] via-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-semibold text-[#1D56C9]">
              {t('about.tag')}
            </span>
            <h1 className="text-4xl sm:text-[2.75rem] font-extrabold text-[#0B2545] leading-tight tracking-tight">
              {t('about.title')}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              {t('about.p2')}
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#163863] text-white font-medium px-6 py-3.5 rounded-lg transition-colors"
              >
                {t('about.cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B2545] p-8 sm:p-10 text-white shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#1D56C9] flex items-center justify-center font-bold text-2xl">
                N
              </div>
              <h2 className="text-2xl font-bold leading-snug">
                {t('about.cardTitle')}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t('about.cardDesc')}
              </p>
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400 text-xs">{t('about.locLabel')}</p>
                  <p className="font-semibold mt-0.5">Riga, Latvia</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">{t('about.langLabel')}</p>
                  <p className="font-semibold mt-0.5">EN / LV / RU</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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