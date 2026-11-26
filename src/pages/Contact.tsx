import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: dbError } = await supabase.from('inquiries').insert([
        {
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          details: formData.details,
        },
      ]);

      if (dbError) console.error('Supabase error:', dbError);

      // Web3Forms orqali Emailga yuborish
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Inquiry (${formData.projectType}) — ${formData.name}`,
          from_name: 'Next Layer Website',
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.details,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or contact via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-linear-to-b from-[#F4F7FC] via-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-sm font-semibold text-[#1D56C9]">
                {t('contact.tag')}
              </span>
              <h1 className="mt-2 text-4xl font-extrabold text-[#0B2545] tracking-tight">
                {t('contact.title')}
              </h1>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D56C9] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B2545]">{t('contact.emailLabel')}</h3>
                  <a
                    href="mailto:hello@nextlayer.dev"
                    className="text-sm text-slate-600 hover:text-[#1D56C9] transition-colors"
                  >
                    hello@nextlayer.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D56C9] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B2545]">{t('contact.locLabel')}</h3>
                  <p className="text-sm text-slate-600">Riga, Latvia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D56C9] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B2545]">{t('contact.respLabel')}</h3>
                  <p className="text-sm text-slate-600">
                    {t('contact.respVal')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B2545]">
                    {t('contact.successTitle')}
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {t('contact.successDesc')}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: '', details: '' });
                    }}
                    className="mt-4 text-sm font-semibold text-[#1D56C9] hover:underline"
                  >
                    {t('contact.sendAnother')}
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#0B2545] mb-6">
                    {t('contact.formTitle')}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t('contact.nameLabel')} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#1D56C9] focus:outline-none focus:ring-2 focus:ring-[#1D56C9]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t('contact.emailInputLabel')} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#1D56C9] focus:outline-none focus:ring-2 focus:ring-[#1D56C9]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t('contact.typeLabel')} <span className="text-rose-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 bg-white focus:border-[#1D56C9] focus:outline-none focus:ring-2 focus:ring-[#1D56C9]/20"
                      >
                        <option value="" disabled>
                          {t('contact.typePlaceholder')}
                        </option>
                        <option value="restaurant-saas">{t('services.items.custom.title')} (Restaurant SaaS)</option>
                        <option value="business-website">{t('services.items.web.title')}</option>
                        <option value="ecommerce">{t('services.items.ecom.title')}</option>
                        <option value="booking-system">{t('services.items.booking.title')}</option>
                        <option value="redesign">{t('services.items.redesign.title')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t('contact.detailsLabel')} <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder={t('contact.detailsPlaceholder')}
                        value={formData.details}
                        onChange={(e) =>
                          setFormData({ ...formData, details: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#1D56C9] focus:outline-none focus:ring-2 focus:ring-[#1D56C9]/20"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-rose-600">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#163863] disabled:opacity-60 text-white font-medium py-3.5 px-6 rounded-lg transition-colors cursor-pointer"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          {t('contact.submit')}
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}